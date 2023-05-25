

export default function Video() {
    return (
        <video className="w-96 md:justify-end" autoPlay muted controls>
            <source src="/videos/marvel.mp4" type="video/mp4" />
        </video>
    )
}