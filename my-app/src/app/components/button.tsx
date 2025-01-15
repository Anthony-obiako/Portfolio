type ExternalButtonProps = {
    href: string;
    children?: React.ReactNode;
};

const ExternalButton = ({ href, children = "Click Here" }: ExternalButtonProps) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-1 sm:px-4 bg-slate-900 text-white rounded-lg shadow hover:bg-slate-700 transition-all md:text-lg font-medium"
        >
            {children}
        </a>
    );
};

export default ExternalButton;
