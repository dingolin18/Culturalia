
export default function Opinion({ title, description, evento, opinion }) {
  return (
   
    <div id="cont" class="grid gap-4 grid-cols-2" style={{
      width: "40vw", justifyContent: "center",
      backgroundColor: "gray", marginLeft: "4px", marginRight: "4px",
      padding: "12px",
      // gridTemplate: "izquierda derecha"
    }} >
         
        <div className="izquierda"  style={{ width: "40vw", justifySelf: "left" }}>
          <h1 style={{ "margin-top": "12px", "margin-bottom": "12px" }}>{title}</h1>
          <p>{description}</p>
        </div>
       
       
        <div className="derecha" style={{ width: "40vw", justifySelf: "right" }}>
          <h1 style={{ "margin-top": "12px", "margin-bottom": "12px" }}>{evento}</h1>
          <p>{opinion}</p>
        </div>

    </div>
    )
  ;
}


