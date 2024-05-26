import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'SEO Title',
    description: 'SEO descripcion',
    keywords: ['About page','Información','sobre nosotros','....']
};

export default function AboutPage() {
    return (
        <>
            <span className="text-7xl">About Page</span>
        </>
    )
}