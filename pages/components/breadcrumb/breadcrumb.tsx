import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react';

export default function Breadcrumb() {

    const pathname = usePathname();
    const pathnames = pathname.split('/').filter((item) => item);

    return (
        <div className="breadcrumb container">
            <p className="breadcrumb__text">
                <span>UI/UX</span>
                {pathnames.map((path, index) => (
                    <React.Fragment key={path}>
                        {" > "}
                        <Link href={`/${pathnames.slice(0, index + 1).join('/')}`} className="breadcrumb__link">
                            {path.replace(/-/g, " ").replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}
                        </Link>
                    </React.Fragment>
                ))}
            </p>
        </div>
    );
}