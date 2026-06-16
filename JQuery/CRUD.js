$(document).ready(function () {
  // ============================================
  // 🔗 PUT YOUR API URL HERE
  // ============================================
  const API_URL = "https://api-database-1.onrender.com/ToDo";
  // Replace with: const API_URL = 'http://localhost:3000/api/contacts';
  // Or: const API_URL = 'https://your-backend.com/api/contacts';

  // Load data on start
  loadContacts();

  // ========== FORM SUBMIT ==========
  $("#contactForm").on("submit", function (e) {
    e.preventDefault();

    clearErrors();
    if (!validateForm()) return;

    const contactData = {
      id: $("#contactId").val(),
      name: $("#name").val().trim(),
      email: $("#email").val().trim(),
      phone: $("#phone").val().trim(),
      username: $("#name").val().trim().toLowerCase().replace(/\s/g, ""),
    };

    showSpinner();

    const isEdit = $("#contactId").val() !== "";

    if (isEdit) {
      // UPDATE
      $.ajax({
        url: `${API_URL}/${contactData.id}`,
        method: "PUT",
        contentType: "application/json",
        data: JSON.stringify(contactData),
        success: function (response) {
          console.log("Updated:", response);
          showNotification("Contact updated!", "success");
          resetForm();
          loadContacts();
        },
        error: function (xhr, status, error) {
          console.error("Update error:", error);
          showNotification("Update failed!", "error");
        },
        complete: hideSpinner,
      });
    } else {
      // CREATE
      $.ajax({
        url: API_URL,
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(contactData),
        success: function (response) {
          console.log("Created:", response);
          showNotification("Contact created!", "success");
          resetForm();
          loadContacts();
        },
        error: function (xhr, status, error) {
          console.error("Create error:", error);
          showNotification("Create failed!", "error");
        },
        complete: hideSpinner,
      });
    }
  });

  // ========== CANCEL ==========
  $("#cancelBtn").on("click", resetForm);

  // ========== DELETE ==========
  $(document).on("click", ".delete-btn", function () {
    const id = $(this).data("id");
    const name = $(this).data("name");

    if (!confirm(`Delete "${name}"?`)) return;

    showSpinner();

    $.ajax({
      url: `${API_URL}/${id}`,
      method: "DELETE",
      success: function () {
        showNotification("Deleted!", "success");
        loadContacts();
      },
      error: function (xhr, status, error) {
        console.error("Delete error:", error);
        showNotification("Delete failed!", "error");
      },
      complete: hideSpinner,
    });
  });

  // ========== EDIT ==========
  $(document).on("click", ".edit-btn", function () {
    const id = $(this).data("id");

    showSpinner();

    $.ajax({
      url: `${API_URL}/${id}`,
      method: "GET",
      success: function (contact) {
        $("#contactId").val(contact.id);
        $("#name").val(contact.name);
        $("#email").val(contact.email);
        $("#phone").val(contact.phone || "");

        $("#form-title").text("Edit Contact");
        $("#submitBtn").text("Update Contact");
        $("#cancelBtn").removeClass("hidden");

        $("html, body").animate(
          {
            scrollTop: $(".form-container").offset().top - 20,
          },
          300,
        );
      },
      error: function (xhr, status, error) {
        console.error("Fetch error:", error);
        showNotification("Failed to load contact!", "error");
      },
      complete: hideSpinner,
    });
  });

  // ========== LOAD ALL ==========
  function loadContacts() {
    showSpinner();

    $.ajax({
      url: API_URL,
      method: "GET",
      success: function (contacts) {
        renderTable(contacts);
      },
      error: function (xhr, status, error) {
        console.error("Load error:", error);
        showNotification("Failed to load contacts!", "error");
      },
      complete: hideSpinner,
    });
  }

  // ========== RENDER TABLE ==========
  function renderTable(contacts) {
    const $tbody = $("#contactsBody");
    $tbody.empty();

    if (!contacts || contacts.length === 0) {
      $("#contactsTable").addClass("hidden");
      $("#emptyState").removeClass("hidden");
      return;
    }

    $("#contactsTable").removeClass("hidden");
    $("#emptyState").addClass("hidden");

    contacts.forEach(function (contact) {
      const row = `
                        <tr>
                            <td>${contact.id}</td>
                            <td>${escapeHtml(contact.name)}</td>
                            <td>${escapeHtml(contact.email)}</td>
                            <td>${escapeHtml(contact.phone) || "-"}</td>
                            <td>
                                <div class="actions">
                                    <button class="btn btn-warning btn-small edit-btn" 
                                            data-id="${contact.id}">Edit</button>
                                    <button class="btn btn-danger btn-small delete-btn" 
                                            data-id="${contact.id}"
                                            data-name="${escapeHtml(contact.name)}">Delete</button>
                                </div>
                            </td>
                        </tr>
                    `;
      $tbody.append(row);
    });
  }

  // ========== UTILITIES ==========
  function validateForm() {
    let isValid = true;
    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
      $("#name").addClass("error");
      $("#nameError").show();
      isValid = false;
    }

    if (!email || !emailRegex.test(email)) {
      $("#email").addClass("error");
      $("#emailError").show();
      isValid = false;
    }

    return isValid;
  }

  function clearErrors() {
    $("input").removeClass("error");
    $(".error-message").hide();
  }

  function resetForm() {
    $("#contactForm")[0].reset();
    $("#contactId").val("");
    $("#form-title").text("Add New Contact");
    $("#submitBtn").text("Save Contact");
    $("#cancelBtn").addClass("hidden");
    clearErrors();
  }

  function escapeHtml(text) {
    if (!text) return "";
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  function showSpinner() {
    $("#spinner").addClass("active");
  }

  function hideSpinner() {
    $("#spinner").removeClass("active");
  }

  function showNotification(message, type) {
    const $notif = $("#notification");
    $notif.removeClass("success error").addClass(type);
    $notif.text(message);
    $notif.fadeIn().delay(3000).fadeOut();
  }
});
