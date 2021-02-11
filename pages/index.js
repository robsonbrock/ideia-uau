import Link from 'next/link';

function Home() {
    return (
        <div>
            Página inicial
            <Link href="/sobre">
                <a>Acessar página Sobre</a>
            </Link>
        </div>
    )
}
export default Home