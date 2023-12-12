import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function TemplatePreview() {
    const { templateId } = useParams();
    const [ template, setTemplate ] = useState<string>("");

    useEffect(() => {
        async function getTemplate() {
            const res = await fetch(`http://localhost:3000/templates/${templateId}/preview`)
            if (res.ok) {
                const template = await res.text()
                setTemplate(template);
            }
        }
        getTemplate()

        const preview = document.createElement('iframe')
        preview.setAttribute('srcDoc', template)
        const previewSection = document.getElementById('previewSection')!;
        previewSection.appendChild(preview);
    }, [template])

    return (
        <section
            id="previewSection"
            className="bg-slate-100 grid place-items-center h-[calc(100vh-150px)] rounded"
        ></section>
    )
}
