async function deleteUrl(shortUrlId) {
    const confirmDelete = confirm("Are you sure you want to delete this URL?");
    if (!confirmDelete) return;

    try {
        const response = await fetch(`/shorten/${shortUrlId}`, {
            method: "DELETE",
            credentials: "include"
        });

        const result = await response.json();
        if (result.success) {
            alert("URL deleted successfully!");
            location.reload(); 
        } else {
            alert("Failed to delete URL");
        }
    } catch (error) {
        console.error("Error deleting URL:", error);
        alert("Something went wrong");
    }
}