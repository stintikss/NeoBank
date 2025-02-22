import { useState, useEffect } from "react";

const Profile = () => {
    const NameBD = localStorage.getItem("Name");
    
    const [name, setName] = useState("");
    const [image, setImage] = useState(localStorage.getItem("profileImage") || null);

    useEffect(() => {
        if (NameBD) {
            setName(NameBD);
        }
    }, [NameBD]); 

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
            localStorage.setItem("profileImage", imageUrl); 
        }
    };

    return (
        <main className="flex justify-center h-[500px] items-center">
            <div className="flex flex-col items-center gap-[15px]">
                <label className="h-[110px] w-[110px] rounded-full bg-[#F2F2F2] flex items-center justify-center cursor-pointer overflow-hidden">
                    {image ? (
                        <img src={image} alt="Avatar" className="h-full w-full object-cover" />
                    ) : (
                        <p className="text-black text-4xl font-bold">?</p>
                    )}
                    <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                </label>

                <div className="font-[400] text-black text-lg" style={{ fontFamily: "Rubik, sans-serif" }}>
                    {name}
                </div>
            </div>
        </main>
    );
};

export default Profile;
