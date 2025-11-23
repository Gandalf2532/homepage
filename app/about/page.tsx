export default function Home() {
  return (
    <div className="text-center bg-zinc-50 font-sans dark:bg-black bg-repeat" style={{minHeight:'100vh',backgroundImage: 'url(/background_img.png)',  backgroundColor: 'rgba(0, 0, 0, 0.6)', backgroundBlendMode: 'multiply' }}>
        <h1 className="text-4xl m-2">Informationen zur Impressumspflicht in Deutschland:</h1>
        <p>Rein private Webseiten sind von der Impressumspflicht ausgenommen. Dazu uählt auch diese Seite. Kriterien für eine Private Liste:</p>
        <ol>
            <li>ausschließlich persönliche Nutzung</li>
            <li>keinerlei kommerzielle Nutzung, Werbung sowie Affliliate-Links</li>
            <li>keine journalistischen Inhalte</li>
        </ol>
    </div>
  );
}