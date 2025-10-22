

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

            updateBookButton();
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

        function updateBookButton() {
            const hasItems = cart.length > 0;
            $('#bookBtn').prop('disabled', !hasItems);
        }

        $('#bookBtn').click(function() {
            const fullName = $('#fullName').val().trim();
            const email = $('#email').val().trim();
            const phone = $('#phone').val().trim();

            if (!fullName || !email || !phone) {
                alert('Please fill in all fields');
                return;
            }

            const total = cart.reduce((sum, item) => sum + item.price, 0);
            const services = cart.map(item => item.name).join(', ');

            alert(`✅ Booking Confirmed!\n\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone}\n\nServices: ${services}\n\nTotal Amount: ₹${total.toFixed(2)}\n\nThank you for choosing our laundry services!`);

            // Clear form and cart
            $('#fullName, #email, #phone').val('');
            cart.forEach(item => updateButtons(item.id, false));
            cart = [];
            updateCart();
        });