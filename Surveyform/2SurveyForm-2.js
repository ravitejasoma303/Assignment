document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("surveyForm");
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        if (form.checkValidity()) {
            const formData = new FormData(form);
            let popupContent = "<h2>Survey Form Submission</h2>";
            for (const [key, value] of formData.entries()) {
                popupContent += `<p><strong>${key}:</strong> ${value}</p>`;
            }
            createModal("Form Submission", popupContent);
            form.reset();
        } else {
            alert("Please fill out all required fields.");
        }
    });

    function createModal(title, content) {
        // Create a modal element
        const modal = document.createElement("div");
        modal.classList.add("modal");

        // Modal content
        modal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${title}</h5>
                        <button type="button" class="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        ${content}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        $(modal).modal("show");

        // Remove the modal when it's closed
        $(modal).on("hidden.bs.modal", function() {
            modal.remove();
        });
    }
});