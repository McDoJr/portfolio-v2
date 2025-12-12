export default function Footer() {
    return (
        <div className="mt-40">
            <span className="text-neutral-500 text-[16px]"
            >Built with
                <a
                    className="hover:text-white text-neutral-400"
                    href="https://nextjs.org/"
                    target="_blank"> Next.js </a>
                and
                <a
                    className="hover:text-white text-neutral-400"
                    href="https://tailwindcss.com/"
                    target="_blank"> Tailwind CSS</a>, deployed with
                <a
                    className="hover:text-white text-neutral-400"
                    href="https://www.netlify.com/"
                    target="_blank"> Netlify</a>.
            </span>
        </div>
    )
}