export default function Services()
{
    const data = ["Software Development", "Techinical Support", "Basic Electronics", "Consultation", "Training - Programming"];
    return(
        <div>
            <h2 className="text-warning">Services</h2>
            <hr/>
            <ul>
                {data.map((record) =>{
                    return(
                        <li>{record}</li>
                    )
                })}
            </ul>
        </div>
    );
}