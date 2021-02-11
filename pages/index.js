import Link from 'next/link';

function Home() {
    return (
        <div>Página inicial</div>

        <Link href="/sobre">
            <a>Acessar página Sobre</a>
        </Link>
    )
}
export default Home