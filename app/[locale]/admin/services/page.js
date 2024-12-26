"use client";
import withAuth from "../../../../components/withAuth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../../firebase";
import React, { useState, useEffect } from "react";
import AdminSidebar from "../../../../components/AdminSidebar";
import { Editor } from "@tinymce/tinymce-react";
import { realtimeDb } from "../../../../firebase";
import { ref, set, onValue, remove } from "firebase/database";
import { useTranslations } from "next-intl";
import "./adminServices.css";



function Page({ params }) {
    const t = useTranslations("AdminSidebar");
    const locale = params?.locale || "en"; // Eğer params varsa locale değerini al

    const [services, setServices] = useState([]);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [editServiceId, setEditServiceId] = useState(null);
    const [selectedLanguage, setSelectedLanguage] = useState("en"); // Varsayılan dil
    const [newService, setNewService] = useState({
        image: "",
        title: { en: "", tr: "" },
        shortDescription: { en: "", tr: "" },
        details: { en: "", tr: "" },
    });
    const [user, setUser] = useState(null);
    const [isDeletePopupOpen, setDeletePopupOpen] = useState(false);
    const [serviceToDelete, setServiceToDelete] = useState(null); // Silinmek istenen hizmetin ID'sini tutar
    useEffect(() => {
        const servicesRef = ref(realtimeDb, "services");

        onValue(servicesRef, (snapshot) => {
            const data = snapshot.val();
            const servicesArray = data
                ? Object.entries(data).map(([id, service]) => ({ id, ...service }))
                : [];
            setServices(servicesArray);
        });
    }, []);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (!currentUser) {
                window.location.href = `/${locale}/login`;
                alert(t("redirecting"));
            } else {
                setUser(currentUser);
            }
        });

        return () => unsubscribe();
    }, [locale, t]);

    if (!user) {
        return <div>{t("loading")}</div>;
    }



    const handleAddService = () => {
        const newServiceKey = editMode ? editServiceId : Date.now().toString();
        const servicesRef = ref(realtimeDb, `services/${newServiceKey}`);

        // dateAdded kontrolü ve varsayılan değer atanması
        const updatedService = {
            ...newService,
            dateAdded: newService.dateAdded || new Date().toISOString(), // Eğer `dateAdded` yoksa şu anki tarihi ekle
        };

        set(servicesRef, updatedService)
            .then(() => {
                setPopupOpen(false);
                setNewService({
                    image: "",
                    title: { en: "", tr: "" },
                    shortDescription: { en: "", tr: "" },
                    details: { en: "", tr: "" },
                });
                setEditMode(false);
                setEditServiceId(null);
            })
            .catch((error) => {
                console.error("Hizmet eklenirken/düzenlenirken hata oluştu:", error);
            });
    };

    const handleEditService = (id) => {
        const serviceToEdit = services.find((service) => service.id === id);
        if (serviceToEdit) {
            setNewService(serviceToEdit);
            setEditServiceId(id);
            setEditMode(true);
            setPopupOpen(true);
        }
    };

    const handleDeleteService = (id) => {
        const servicesRef = ref(realtimeDb, `services/${id}`);
        remove(servicesRef)
            .then(() => {
                alert("Hizmet başarıyla silindi.");
            })
            .catch((error) => {
                console.error("Hizmet silinirken hata oluştu:", error);
            });
    };
    const openDeletePopup = (id) => {
        setServiceToDelete(id); // Silinecek hizmetin ID'sini kaydet
        setDeletePopupOpen(true); // Popup'u aç
    };

    const closeDeletePopup = () => {
        setServiceToDelete(null); // Silinecek hizmet ID'sini temizle
        setDeletePopupOpen(false); // Popup'u kapat
    };
    return (
        <div className="adminServicesMain">
            <div>
                <AdminSidebar locale={locale} />
            </div>
            <div className="adminServicesContent">
                <button
                    className="adminServicesAddButton"
                    onClick={() => {
                        setEditMode(false);
                        setNewService({
                            image: "",
                            title: { en: "", tr: "" },
                            shortDescription: { en: "", tr: "" },
                            details: { en: "", tr: "" },
                        });
                        setPopupOpen(true);
                    }}
                >
                    + Hizmet Ekle
                </button>

                {isPopupOpen && (
                    <div className="adminServicesPopup">
                        <h2>{editMode ? "Hizmeti Düzenle" : "Yeni Hizmet Ekle"}</h2>
                        <input
                            type="text"
                            placeholder="Resim Linki"
                            value={newService.image}
                            onChange={(e) => setNewService({ ...newService, image: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Başlık"
                            value={newService.title[selectedLanguage]}
                            onChange={(e) =>
                                setNewService({
                                    ...newService,
                                    title: { ...newService.title, [selectedLanguage]: e.target.value },
                                })
                            }
                        />

                        <h4>Kısa Açıklama</h4>
                        <Editor
                            apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
                            value={newService.shortDescription[selectedLanguage]}
                            onEditorChange={(content) =>
                                setNewService({
                                    ...newService,
                                    shortDescription: { ...newService.shortDescription, [selectedLanguage]: content },
                                })
                            }
                            init={{
                                height: 150,
                                menubar: false,
                                plugins: [
                                    "advlist autolink lists link image charmap print preview anchor",
                                    "searchreplace visualblocks code fullscreen",
                                    "insertdatetime media table paste code help wordcount",
                                ],
                                toolbar:
                                    "undo redo | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | code",
                            }}
                        />

                        <h4>Detaylar</h4>
                        <Editor
                            apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
                            value={newService.details[selectedLanguage]}
                            onEditorChange={(content) =>
                                setNewService({
                                    ...newService,
                                    details: { ...newService.details, [selectedLanguage]: content },
                                })
                            }
                            init={{
                                height: 150,
                                menubar: false,
                                plugins: [
                                    "advlist autolink lists link image charmap print preview anchor",
                                    "searchreplace visualblocks code fullscreen",
                                    "insertdatetime media table paste code help wordcount",
                                ],
                                toolbar:
                                    "undo redo | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | code",
                            }}
                        />

                        <select
                            value={selectedLanguage}
                            onChange={(e) => setSelectedLanguage(e.target.value)}
                            style={{
                                marginTop: "20px",
                                padding: "10px",
                                borderRadius: "8px",
                                border: "1px solid #ccc",
                                width: "100%",
                            }}
                        >
                            <option value="en">English</option>
                            <option value="tr">Türkçe</option>
                        </select>

                        <div className="adminServicesPopupActions">
                            <button onClick={handleAddService}>
                                {editMode ? "Kaydet" : "Ekle"}
                            </button>
                            <button onClick={() => setPopupOpen(false)}>Çık</button>
                        </div>
                    </div>
                )}

                <div className="adminServicesGrid">
                    {services.map((service) => (
                        <div key={service.id} className="adminServicesCard">
                            <img src={service.image} alt={`B&B_${locale === "en" ? service.title.en : service.title.tr}`} />
                            <h3>{locale === "en" ? service.title.en : service.title.tr}</h3>
                            <div dangerouslySetInnerHTML={{ __html: service.shortDescription?.[locale]?.substring(0, 50) + "..." }} />
                            <div className="adminServicesCardActions">
                                <button onClick={() => handleEditService(service.id)}>Düzenle</button>
                                <button onClick={() => openDeletePopup(service.id)}>Sil</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {isDeletePopupOpen && (
                <div className="deletePopup">
                    <div className="deletePopupContent">
                        <h3>Emin misiniz?</h3>
                        <p>Bu hizmeti silmek istediğinizden emin misiniz?</p>
                        <div className="deletePopupActions">
                            <button
                                className="cancelButton"
                                onClick={closeDeletePopup}
                            >
                                Vazgeç
                            </button>
                            <button
                                className="deleteButton"
                                onClick={() => {
                                    handleDeleteService(serviceToDelete);
                                    closeDeletePopup();
                                }}
                            >
                                Sil
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default withAuth(Page);