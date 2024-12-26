import React from "react";
import { adminRTDB } from "../../../../firebaseAdmin";
import ReferenceDetailClient from "./ReferenceDetailClient";

export async function fetchReferencesAndCurrent(id) {
    try {
        // Tüm referansları çek
        const snapshot = await adminRTDB.ref("references").once("value");
        const data = snapshot.val();
        const references = data
            ? Object.entries(data).map(([id, ref]) => ({ id, ...ref }))
            : [];

        // Mevcut referansı bulun
        const currentReference = references.find((ref) => ref.id === id);

        // Tarihe göre sıralayın
        references.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));

        return { references, currentReference };
    } catch (error) {
        console.error("Error fetching references:", error);
        return { references: [], currentReference: null };
    }
}

export default async function ReferenceDetailPage({ params }) {
    const { id, locale } = params;
    const { references, currentReference } = await fetchReferencesAndCurrent(id);

    if (!currentReference) {
        // Eğer referans bulunamazsa 404 veya yönlendirme yapabilirsiniz
        return <p>Reference not found.</p>;
    }

    return (
        <ReferenceDetailClient
            reference={currentReference}
            references={references}
            locale={locale}
        />
    );
}