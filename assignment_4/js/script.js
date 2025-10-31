let cart = [];

function addToCart(serviceId) {
    const serviceItem = $(`.service-item[data-id="${serviceId}"]`);
    const service = {
        id: serviceId,
        name: serviceItem.data('name'),
        price: serviceItem.data('price')
    };

    if (cart.find(item => item.id === serviceId)) {
        return;
    }

    cart.push(service);
    updateCart();
    updateButtons(serviceId, true);
}

function removeFromCart(serviceId) {
    cart = cart.filter(item => item.id !== serviceId);
    updateCart();
    updateButtons(serviceId, false);
}

function updateCart() {
    const cartBody = $('#cartItems');
    cartBody.empty();

    if (cart.length === 0) {
        cartBody.append('<tr><td colspan="3" class="empty-cart">No items added yet</td></tr>');
        $('#totalAmount').text('₹0.00');
    } else {
        cart.forEach((item, index) => {
            const row = `
                <tr>
                    <td>${index + 1}</td>
                    <td>${item.name}</td>
                    <td style="text-align: right;">₹${item.price.toFixed(2)}</td>
                </tr>
            `;
            cartBody.append(row);
        });

        const total = cart.reduce((sum, item) => sum + item.price, 0);
        $('#totalAmount').text(`₹${total.toFixed(2)}`);
    }
}

function updateButtons(serviceId, inCart) {
    const serviceItem = $(`.service-item[data-id="${serviceId}"]`);
    const addBtn = serviceItem.find('.btn-add');
    const removeBtn = serviceItem.find('.btn-remove');

    if (inCart) {
        addBtn.hide();
        removeBtn.show();
    } else {
        removeBtn.hide();
        addBtn.show();
    }
}



$('#bookBtn').click(function() {
    const fullName = $('#fullName').val().trim();
    const email = $('#email').val().trim();
    const phone = $('#phone').val().trim();

    if (!fullName || !email || !phone) {
        alert('Please fill in all fields');
        return;
    }
    
    // Send email before clearing
    sendMail(fullName, email, phone);

    // Clear form and cart
    $('#fullName, #email, #phone').val('');
    cart.forEach(item => updateButtons(item.id, false));
    cart = [];
    updateCart();
});


emailjs.init('7MQF5X8dm-ga0CyVq');
// Send email function
function sendMail(fullname, email, phone) { 
    // Create cart items string
    const cartItems = cart.map((item, index) => 
        `${index + 1}. ${item.name} - ₹${item.price.toFixed(2)}`
    ).join('\n');
    
    // Create arrays for individual product names and prices
    const productNames = cart.map(item => item.name).join(', ');
    const productPrices = cart.map(item => `₹${item.price.toFixed(2)}`).join(', ');
    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    
    const params = {
        fullname: fullname,
        email: email, 
        phone: phone,
        cart_items: cartItems,
        total_amount: `₹${total.toFixed(2)}`
    };

    emailjs.send("service_8sf8hf9", "template_mnyn75n", params)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("Email sent successfully!");
        })
        .catch(function(error) {
            console.log('FAILED...', error);
            alert("Email sending failed. Please try again.");
        });
}