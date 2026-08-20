export default function Upload({ onUpload }) {
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const data = new FormData();

    data.append("file", file);
    data.append("upload_preset", "icecream_upload");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/youyuszd/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const json = await res.json();

    // Enviar la URL completa, no el public_id
    onUpload(json.secure_url);
  };

  return <input type="file" onChange={uploadImage} />;
}
