const scrollMotionPreference = window.matchMedia('(prefers-reduced-motion: reduce)'); // Store scroll motion preference for this part of the page.
let lenis = null; // Keep track of lenis for this part of the page.
let lenisFrame = null; // Keep track of lenis frame for this part of the page.
function configureSmoothScroll() { // Set up smooth page scrolling while respecting reduced motion.
  if (lenisFrame !== null) cancelAnimationFrame(lenisFrame); // Continue only when the condition in brackets is met.
  lenisFrame = null; // Update lenis frame.
  if (lenis) lenis.destroy(); // Continue only when the condition in brackets is met.
  lenis = null; // Update lenis.
  if (scrollMotionPreference.matches || typeof window.Lenis !== 'function') return; // Continue only when the condition in brackets is met.
  lenis = new window.Lenis({ // Update lenis.
    duration: 1.4, // Set the duration value.
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Set the easing value.
    smoothWheel: true, // Set the smooth wheel value.
    wheelMultiplier: 0.9, // Set the wheel multiplier value.
    touchMultiplier: 2, // Set the touch multiplier value.
    syncTouch: false // Set the sync touch value.
  }); // Finish and connect this callback or setup block.
  if (document.querySelector('#cart-panel:not([hidden]), #product-viewer[open]')) lenis.stop(); // Continue only when the condition in brackets is met.
  function animateScroll(time) { // Update smooth scrolling for the next screen refresh.
    lenis.raf(time); // Continue the current calculation, element setup or callback.
    lenisFrame = requestAnimationFrame(animateScroll); // Update on the next screen refresh for smooth movement.
  } // Finish this block or collection.
  lenisFrame = requestAnimationFrame(animateScroll); // Update on the next screen refresh for smooth movement.
} // Finish this block or collection.
configureSmoothScroll(); // Set up smooth page scrolling while respecting reduced motion.
scrollMotionPreference.addEventListener('change', configureSmoothScroll); // Respond when this value or device preference changes.
document.addEventListener('click', event => { // Respond when this control is clicked.
  const anchor = event.target.closest('a[href^="#"]'); // Store anchor for this part of the page.
  if (!anchor || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || anchor.hasAttribute('download') || anchor.target && anchor.target !== '_self') return; // Continue only when the condition in brackets is met.
  const targetId = anchor.getAttribute('href'); // Store target id for this part of the page.
  if (targetId === '#' || targetId.startsWith('#menu-')) return; // Continue only when the condition in brackets is met.
  const target = document.getElementById(targetId.slice(1)); // Store target for this part of the page.
  if (!target) return; // Continue only when the condition in brackets is met.
  event.preventDefault(); // Use the custom behavior instead of the browser’s default action.
  const offset = -(document.getElementById('site-header')?.offsetHeight || 0) - 16; // Store offset for this part of the page.
  if (lenis) { // Continue only when the condition in brackets is met.
    lenis.scrollTo(target, { // Continue the current calculation, element setup or callback.
      offset // Continue the current calculation, element setup or callback.
    }); // Finish and connect this callback or setup block.
  } else { // Handle the alternative case.
    window.scrollTo({ // Continue the current calculation, element setup or callback.
      top: Math.max(0, target.getBoundingClientRect().top + window.scrollY + offset), // Set the top value.
      behavior: scrollMotionPreference.matches ? 'instant' : 'smooth' // Set the behavior value.
    }); // Finish and connect this callback or setup block.
  } // Finish this block or collection.
}); // Finish and connect this callback or setup block.
const header = document.getElementById('site-header'); // Store header for this part of the page.
function updateHeaderState() { // Adjust the header’s appearance after scrolling.
  if (window.scrollY > 4) { // Continue only when the condition in brackets is met.
    header.classList.add('is-scrolled'); // Update the styling state of this element.
  } else { // Handle the alternative case.
    header.classList.remove('is-scrolled'); // Update the styling state of this element.
  } // Finish this block or collection.
} // Finish this block or collection.
window.addEventListener('scroll', updateHeaderState, { // Respond when the page scrolls.
  passive: true // Set the passive value.
}); // Finish and connect this callback or setup block.
updateHeaderState(); // Adjust the header’s appearance after scrolling.
const navToggle = document.getElementById('nav-toggle'); // Store nav toggle for this part of the page.
const siteNav = document.getElementById('site-nav'); // Store site nav for this part of the page.
if (navToggle && siteNav) { // Continue only when the condition in brackets is met.
  navToggle.addEventListener('click', () => { // Respond when this control is clicked.
    const isOpen = siteNav.classList.toggle('is-open'); // Store is open for this part of the page.
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false'); // Update an element setting or its accessible description.
  }); // Finish and connect this callback or setup block.
  siteNav.querySelectorAll('a').forEach(link => { // Repeat this work for each item in the collection.
    link.addEventListener('click', () => { // Respond when this control is clicked.
      siteNav.classList.remove('is-open'); // Update the styling state of this element.
      navToggle.setAttribute('aria-expanded', 'false'); // Update an element setting or its accessible description.
    }); // Finish and connect this callback or setup block.
  }); // Finish and connect this callback or setup block.
} // Finish this block or collection.
const revealEls = Array.from(document.querySelectorAll('.beat, .policy-card, .reveal-up')).filter(el => !el.matches('.story-runway .story-track > .beat')); // Keep one-time reveals for other content; the horizontal Story controller owns its beats.
if (revealEls.length) { // Continue only when the condition in brackets is met.
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches; // Store prefers reduced motion for this part of the page.
  if (prefersReducedMotion) { // Continue only when the condition in brackets is met.
    revealEls.forEach(el => el.classList.add('is-visible')); // Update the styling state of this element.
  } else { // Handle the alternative case.
    const observer = new IntersectionObserver(entries => { // Store observer for this part of the page.
      entries.forEach(entry => { // Repeat this work for each item in the collection.
        if (entry.isIntersecting) { // Continue only when the condition in brackets is met.
          entry.target.classList.add('is-visible'); // Update the styling state of this element.
          observer.unobserve(entry.target); // Continue the current calculation, element setup or callback.
        } // Finish this block or collection.
      }); // Finish and connect this callback or setup block.
    }, { // Continue the current calculation, element setup or callback.
      threshold: 0.3, // Set the threshold value.
      rootMargin: '0px 0px -80px 0px' // Set the root margin value.
    }); // Finish and connect this callback or setup block.
    revealEls.forEach(el => observer.observe(el)); // Repeat this work for each item in the collection.
  } // Finish this block or collection.
} // Finish this block or collection.
const WHATSAPP_NUMBER = "923001334417"; // Store whatsapp number for this part of the page.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xvkokaga"; // Store formspree endpoint for this part of the page.
const MENU_DATA = { // Store menu data for this part of the page.
  cakes: { // Set the cakes value.
    label: "Cakes", // Set the label value.
    type: "cake", // Set the type value.
    items: [{ // Set the items value.
      name: "Lotus Three Milk Cake", // Set the name value.
      images: ["photos/lotus-three-milk-cake-hero.webp", "photos/lotus-three-milk-cake-top-down.webp", "photos/lotus-three-milk-cake-close-up.webp", "photos/lotus-three-milk-cake-slice.webp"], // Set the images value.
      sizePricing: { // Set the size pricing value.
        "Bento": 659, // Provide this text or value to the surrounding code.
        "1 lb": 1249, // Provide this text or value to the surrounding code.
        "2 lb": 2409, // Provide this text or value to the surrounding code.
        "3.5 lb": 4379 // Provide this text or value to the surrounding code.
      } // Finish this block or collection.
    }, { // Continue the current calculation, element setup or callback.
      name: "Chocolate Three Milk Cake", // Set the name value.
      images: [], // Set the images value.
      sizePricing: { // Set the size pricing value.
        "Bento": 579, // Provide this text or value to the surrounding code.
        "1 lb": 1089, // Provide this text or value to the surrounding code.
        "2 lb": 2089, // Provide this text or value to the surrounding code.
        "3.5 lb": 3819 // Provide this text or value to the surrounding code.
      } // Finish this block or collection.
    }, { // Continue the current calculation, element setup or callback.
      name: "Pineapple Cake", // Set the name value.
      images: ["photos/pineapple-cake-hero.webp", "photos/pineapple-cake-top-down.webp", "photos/pineapple-cake-close-up.webp", "photos/pineapple-cake-slice.webp"], // Set the images value.
      sizePricing: { // Set the size pricing value.
        "Bento": 499, // Provide this text or value to the surrounding code.
        "1 lb": 909, // Provide this text or value to the surrounding code.
        "2 lb": 1729, // Provide this text or value to the surrounding code.
        "3.5 lb": 3189 // Provide this text or value to the surrounding code.
      } // Finish this block or collection.
    }, { // Continue the current calculation, element setup or callback.
      name: "Chocolate Chip Cake", // Set the name value.
      images: ["photos/chocolate-chip-cake-hero.webp", "photos/chocolate-chip-cake-top-down.webp", "photos/chocolate-chip-cake-close-up.webp", "photos/chocolate-chip-cake-slice.webp"], // Set the images value.
      sizePricing: { // Set the size pricing value.
        "Bento": 469, // Provide this text or value to the surrounding code.
        "1 lb": 869, // Provide this text or value to the surrounding code.
        "2 lb": 1639, // Provide this text or value to the surrounding code.
        "3.5 lb": 3039 // Provide this text or value to the surrounding code.
      } // Finish this block or collection.
    }, { // Continue the current calculation, element setup or callback.
      name: "Fudge Cake", // Set the name value.
      images: ["photos/fudge-cake-hero.webp", "photos/fudge-cake-top-down.webp", "photos/fudge-cake-close-up.webp", "photos/fudge-cake-slice.webp"], // Set the images value.
      sizePricing: { // Set the size pricing value.
        "Bento": 839, // Provide this text or value to the surrounding code.
        "1 lb": 1599, // Provide this text or value to the surrounding code.
        "2 lb": 3109, // Provide this text or value to the surrounding code.
        "3.5 lb": 5599 // Provide this text or value to the surrounding code.
      } // Finish this block or collection.
    }] // Finish this block or collection.
  }, // Finish this block or collection.
  brownies: { // Set the brownies value.
    label: "Brownies", // Set the label value.
    type: "unit", // Set the type value.
    unitPrice: 189, // Set the unit price value.
    minQty: 6, // Set the min qty value.
    note: "3×3 inches each · order 6 or more", // Set the note value.
    items: [{ // Set the items value.
      name: "Chocolate Brownies", // Set the name value.
      images: ["photos/chocolate-brownies-hero.webp", "photos/chocolate-brownies-top-down.webp", "photos/chocolate-brownies-bite.webp"] // Set the images value.
    }] // Finish this block or collection.
  }, // Finish this block or collection.
  cookies: { // Set the cookies value.
    label: "Cookies", // Set the label value.
    type: "unit", // Set the type value.
    minQty: 4, // Set the min qty value.
    note: "order 4 or more", // Set the note value.
    items: [{ // Set the items value.
      name: "Lotus Cookies", // Set the name value.
      unitPrice: 249, // Set the unit price value.
      images: ["photos/lotus-cookies-hero.webp", "photos/lotus-cookies-top-down.webp", "photos/lotus-cookies-close-up.webp", "photos/lotus-cookies-bite.webp"] // Set the images value.
    }, { // Continue the current calculation, element setup or callback.
      name: "Chocolate Chip Cookies", // Set the name value.
      unitPrice: 169, // Set the unit price value.
      images: ["photos/chocolate-cookies-hero.webp", "photos/chocolate-cookies-top-down.webp", "photos/chocolate-cookies-bite.webp"] // Set the images value.
    }] // Finish this block or collection.
  }, // Finish this block or collection.
  biscuits: { // Set the biscuits value.
    label: "Butter Biscuits", // Set the label value.
    type: "unit", // Set the type value.
    unitPrice: 39, // Set the unit price value.
    minQty: 15, // Set the min qty value.
    note: "order 15 or more", // Set the note value.
    items: [{ // Set the items value.
      name: "Butter Biscuits", // Set the name value.
      images: ["photos/butter-biscuits-hero.webp", "photos/butter-biscuits-close-up.webp", "photos/butter-biscuits-top-down.webp"] // Set the images value.
    }] // Finish this block or collection.
  } // Finish this block or collection.
}; // Finish this block or collection.
function formatPrice(amount) { // Format a rupee amount for display.
  return "Rs. " + amount.toLocaleString('en-PK'); // Send this result back to the code that called this function.
} // Finish this block or collection.
const CART_STORAGE_KEY = 'butttercloud_cart'; // Store cart storage key for this part of the page.
let cart = []; // Keep track of cart for this part of the page.
function loadCart() { // Restore previously saved cart items.
  try { // Attempt this operation and handle any failure below.
    const raw = localStorage.getItem(CART_STORAGE_KEY); // Store raw for this part of the page.
    const stored = raw ? JSON.parse(raw) : []; // Store stored for this part of the page.
    cart = Array.isArray(stored) ? stored.filter(line => line && typeof line.name === 'string' && (line.size == null || typeof line.size === 'string') && Number.isInteger(line.qty) && line.qty > 0 && Number.isFinite(line.unitPrice) && line.unitPrice > 0) : []; // Update cart.
  } catch (err) { // Handle a failure so the rest of the page can continue.
    cart = []; // Update cart.
  } // Finish this block or collection.
} // Finish this block or collection.
function saveCart() { // Save the current cart on this device.
  try { // Attempt this operation and handle any failure below.
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart)); // Continue the current calculation, element setup or callback.
  } catch (err) {} // Handle a failure so the rest of the page can continue.
} // Finish this block or collection.
function cartLineTotal(line) { // Calculate the total for one cart item.
  return line.unitPrice * line.qty; // Send this result back to the code that called this function.
} // Finish this block or collection.
function cartTotal() { // Calculate the total price of all cart items.
  return cart.reduce((sum, line) => sum + cartLineTotal(line), 0); // Send this result back to the code that called this function.
} // Finish this block or collection.
function addToCart(line) { // Define how to add to cart.
  const existing = cart.find(l => l.name === line.name && l.size === line.size); // Store existing for this part of the page.
  if (existing) { // Continue only when the condition in brackets is met.
    existing.qty += line.qty; // Update existing qty.
  } else { // Handle the alternative case.
    cart.push(line); // Continue the current calculation, element setup or callback.
  } // Finish this block or collection.
  saveCart(); // Save the current cart on this device.
  renderCart(); // Refresh the cart count, total and checkout summary.
  triggerCartWiggle(); // Run trigger cart wiggle.
  showCartToast('Added ' + line.name + ' to cart', { icon: '✓' }); // Confirm to the shopper that their item was added.
} // Finish this block or collection.
let cartToastTimeout = null; // Track the active toast's hide timer so rapid triggers don't stack messages.
function showCartToast(message, options) { // Define how to briefly show a confirmation message in the shared toast.
  const opts = options || {}; // Fill in defaults when no options are passed.
  const toast = document.getElementById('cart-toast'); // Store toast for this part of the page.
  if (!toast) return; // Continue only when the condition in brackets is met.
  const icon = opts.icon || '✓'; // Use a checkmark by default, or a caller-provided icon.
  const duration = opts.duration || 2200; // Show the toast for ~2.2s by default, or a caller-provided duration.
  toast.innerHTML = '<span class="cart-toast-icon" aria-hidden="true">' + icon + '</span><span>' + message + '</span>'; // Update the words shown inside the toast.
  toast.classList.toggle('is-order-success', !!opts.isOrderSuccess); // Apply the green order-success look only when this toast is for a completed order.
  toast.classList.add('is-visible'); // Slide and fade the toast into view.
  if (cartToastTimeout) clearTimeout(cartToastTimeout); // Cancel any previous hide timer so quick repeat triggers refresh cleanly.
  cartToastTimeout = setTimeout(() => { // Schedule hiding the toast after it's had time to be read.
    toast.classList.remove('is-visible'); // Slide and fade the toast back out of view.
  }, duration); // Keep the toast visible for the requested duration.
} // Finish this block or collection.
function triggerCartWiggle() { // Define how to trigger cart wiggle.
  const fab = document.getElementById('cart-fab'); // Store fab for this part of the page.
  if (!fab) return; // Continue only when the condition in brackets is met.
  fab.classList.remove('is-wiggling'); // Update the styling state of this element.
  void fab.offsetWidth; // Continue the current calculation, element setup or callback.
  fab.classList.add('is-wiggling'); // Update the styling state of this element.
  fab.addEventListener('animationend', () => { // Respond when animationend occurs.
    fab.classList.remove('is-wiggling'); // Update the styling state of this element.
  }, { // Continue the current calculation, element setup or callback.
    once: true // Set the once value.
  }); // Finish and connect this callback or setup block.
} // Finish this block or collection.
function removeFromCart(index) { // Define how to remove from cart.
  cart.splice(index, 1); // Continue the current calculation, element setup or callback.
  saveCart(); // Save the current cart on this device.
  renderCart(); // Refresh the cart count, total and checkout summary.
} // Finish this block or collection.
function renderMenu() { // Build the product cards with photos, prices and quantity controls.
  Object.entries(MENU_DATA).forEach(([key, category]) => { // Repeat this work for each item in the collection.
    const container = document.getElementById("menu-" + key); // Store container for this part of the page.
    if (!container) return; // Continue only when the condition in brackets is met.
    container.innerHTML = ''; // Build the visible contents of this element.
    category.items.forEach(item => { // Repeat this work for each item in the collection.
      const itemName = item.name; // Store item name for this part of the page.
      const card = document.createElement('div'); // Store card for this part of the page.
      card.className = 'menu-item-card'; // Update card class name.
      const images = item.images || []; // Store images for this part of the page.
      const photoHtml = images.length ? "<button type=\"button\" class=\"menu-item-photo-wrap product-photo-trigger\" aria-label=\"View photos of " + itemName + "\" aria-haspopup=\"dialog\">\n             <span class=\"product-float\">" + images.map((src, i) => "<img " + (i === 0 ? 'src' : 'data-src') + "=\"" + src + "\" alt=\"" + itemName + " — " + photoAngle(src) + "\" class=\"menu-item-photo" + (i === 0 ? ' is-active' : '') + "\" loading=\"lazy\" decoding=\"async\">").join('') + "</span>\n             <span class=\"product-photo-hint\">Take a closer look</span>\n           </button>" : "<div class=\"menu-item-photo-wrap menu-item-photo-wrap--placeholder\">\n             <span class=\"menu-item-placeholder-icon\" aria-hidden=\"true\">🍰</span>\n             <span class=\"menu-item-placeholder-text\">Photo coming soon</span>\n           </div>"; // Store photo html for this part of the page.
      if (category.type === 'cake') { // Continue only when the condition in brackets is met.
        const sizes = Object.keys(item.sizePricing); // Store sizes for this part of the page.
        let selectedSize = sizes[0]; // Keep track of selected size for this part of the page.
        let qty = 1; // Keep track of qty for this part of the page.
        card.innerHTML = "\n          " + photoHtml + "\n          <span class=\"menu-item-name\">" + itemName + "</span>\n          <div class=\"menu-size-select\" role=\"group\" aria-label=\"" + itemName + " size\"></div>\n          <span class=\"menu-item-price\" data-price-display></span>\n          <div class=\"menu-item-controls\">\n            <div class=\"qty-stepper\">\n              <button type=\"button\" data-qty-minus aria-label=\"Decrease quantity\">−</button>\n              <span data-qty-display>1</span>\n              <button type=\"button\" data-qty-plus aria-label=\"Increase quantity\">+</button>\n            </div>\n            <button type=\"button\" class=\"menu-add-btn\" data-add-btn>Add to Cart</button>\n          </div>\n        "; // Build the visible contents of this element.
        const sizeGroup = card.querySelector('.menu-size-select'); // Store size group for this part of the page.
        sizes.forEach(size => { // Repeat this work for each item in the collection.
          const btn = document.createElement('button'); // Store btn for this part of the page.
          btn.type = 'button'; // Update btn type.
          btn.textContent = size; // Update the words or number shown in this element.
          if (size === selectedSize) btn.classList.add('is-selected'); // Continue only when the condition in brackets is met.
          btn.addEventListener('click', () => { // Respond when this control is clicked.
            selectedSize = size; // Update selected size.
            sizeGroup.querySelectorAll('button').forEach(b => b.classList.remove('is-selected')); // Update the styling state of this element.
            btn.classList.add('is-selected'); // Update the styling state of this element.
            updatePriceDisplay(); // Run update price display.
          }); // Finish and connect this callback or setup block.
          sizeGroup.appendChild(btn); // Add this element to its visible container.
        }); // Finish and connect this callback or setup block.
        const priceDisplay = card.querySelector('[data-price-display]'); // Store price display for this part of the page.
        const qtyDisplay = card.querySelector('[data-qty-display]'); // Store qty display for this part of the page.
        function updatePriceDisplay() { // Define how to update price display.
          const unitPrice = item.sizePricing[selectedSize]; // Store unit price for this part of the page.
          priceDisplay.textContent = formatPrice(unitPrice) + " each"; // Update the words or number shown in this element.
        } // Finish this block or collection.
        updatePriceDisplay(); // Run update price display.
        card.querySelector('[data-qty-minus]').addEventListener('click', () => { // Respond when this control is clicked.
          qty = Math.max(1, qty - 1); // Update qty.
          qtyDisplay.textContent = qty; // Update the words or number shown in this element.
        }); // Finish and connect this callback or setup block.
        card.querySelector('[data-qty-plus]').addEventListener('click', () => { // Respond when this control is clicked.
          qty += 1; // Update qty.
          qtyDisplay.textContent = qty; // Update the words or number shown in this element.
        }); // Finish and connect this callback or setup block.
        card.querySelector('[data-add-btn]').addEventListener('click', () => { // Respond when this control is clicked.
          addToCart({ // Run add to cart.
            name: itemName, // Set the name value.
            size: selectedSize, // Set the size value.
            qty: qty, // Set the qty value.
            unitPrice: item.sizePricing[selectedSize], // Set the unit price value.
            category: category.label // Set the category value.
          }); // Finish and connect this callback or setup block.
          qty = 1; // Update qty.
          qtyDisplay.textContent = qty; // Update the words or number shown in this element.
        }); // Finish and connect this callback or setup block.
      } else { // Handle the alternative case.
        const unitPrice = item.unitPrice !== undefined ? item.unitPrice : category.unitPrice; // Store unit price for this part of the page.
        let qty = category.minQty; // Keep track of qty for this part of the page.
        card.innerHTML = "\n          " + photoHtml + "\n          <span class=\"menu-item-name\">" + itemName + "</span>\n          " + (category.note ? "<span class=\"menu-item-note\">" + category.note + "</span>" : '') + "\n          <span class=\"menu-item-price\">" + formatPrice(unitPrice) + " each</span>\n          <div class=\"menu-item-controls\">\n            <div class=\"qty-stepper\">\n              <button type=\"button\" data-qty-minus aria-label=\"Decrease quantity\">−</button>\n              <span data-qty-display>" + qty + "</span>\n              <button type=\"button\" data-qty-plus aria-label=\"Increase quantity\">+</button>\n            </div>\n            <button type=\"button\" class=\"menu-add-btn\" data-add-btn>Add to Cart</button>\n          </div>\n        "; // Build the visible contents of this element.
        const qtyDisplay = card.querySelector('[data-qty-display]'); // Store qty display for this part of the page.
        card.querySelector('[data-qty-minus]').addEventListener('click', () => { // Respond when this control is clicked.
          qty = Math.max(category.minQty, qty - 1); // Update qty.
          qtyDisplay.textContent = qty; // Update the words or number shown in this element.
        }); // Finish and connect this callback or setup block.
        card.querySelector('[data-qty-plus]').addEventListener('click', () => { // Respond when this control is clicked.
          qty += 1; // Update qty.
          qtyDisplay.textContent = qty; // Update the words or number shown in this element.
        }); // Finish and connect this callback or setup block.
        card.querySelector('[data-add-btn]').addEventListener('click', () => { // Respond when this control is clicked.
          addToCart({ // Run add to cart.
            name: itemName, // Set the name value.
            size: null, // Set the size value.
            qty: qty, // Set the qty value.
            unitPrice: unitPrice, // Set the unit price value.
            category: category.label // Set the category value.
          }); // Finish and connect this callback or setup block.
          qty = category.minQty; // Update qty.
          qtyDisplay.textContent = qty; // Update the words or number shown in this element.
        }); // Finish and connect this callback or setup block.
      } // Finish this block or collection.
      container.appendChild(card); // Add this element to its visible container.
      setupPhotoCrossfade(card); // Connect desktop hover and tap or keyboard opening for this product.
    }); // Finish and connect this callback or setup block.
  }); // Finish and connect this callback or setup block.
} // Finish this block or collection.
const prefersReducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)'); // Store prefers reduced motion query for this part of the page.
const productHoverQuery = window.matchMedia('(hover: hover) and (pointer: fine)'); // Store product hover query for this part of the page.
let stopDesktopProduct = null; // Keep track of stop desktop product for this part of the page.
let modalProductPlayer = null; // Keep track of modal product player for this part of the page.
let modalProductTrigger = null; // Keep track of modal product trigger for this part of the page.
let productCursorHome = null; // Keep track of product cursor home for this part of the page.
const productDialog = document.getElementById('product-viewer'); // Store product dialog for this part of the page.
const productStage = document.getElementById('product-viewer-stage'); // Store product stage for this part of the page.
const productTitle = document.getElementById('product-viewer-title'); // Store product title for this part of the page.
const productCount = document.getElementById('product-viewer-count'); // Store product count for this part of the page.
const productPause = document.getElementById('product-viewer-pause'); // Store product pause for this part of the page.
const productStatus = document.getElementById('product-viewer-status'); // Store product status for this part of the page.
function photoAngle(src) { // Turn a photo filename into a readable angle label.
  if (src.includes('-top-down.')) return 'Angled view'; // Continue only when the condition in brackets is met.
  if (src.includes('-close-up.')) return 'Close-up'; // Continue only when the condition in brackets is met.
  if (src.includes('-slice.')) return 'Inside the cake'; // Continue only when the condition in brackets is met.
  if (src.includes('-bite.')) return 'A peek inside'; // Continue only when the condition in brackets is met.
  return 'Main view'; // Send this result back to the code that called this function.
} // Finish this block or collection.
function stopDesktopPreview() { // Return the active product photo to its menu card.
  if (stopDesktopProduct) stopDesktopProduct(); // Continue only when the condition in brackets is met.
} // Finish this block or collection.
function createProductPlayer(photos, onSelect = () => {}, onError = () => {}) { // Manage loading and timed changes between one product’s photos.
  let index = 0; // Keep track of index for this part of the page.
  let timer = null; // Keep track of timer for this part of the page.
  let disposed = false; // Keep track of disposed for this part of the page.
  let request = 0; // Keep track of request for this part of the page.
  let paused = prefersReducedMotionQuery.matches; // Keep track of paused for this part of the page.
  function clearTimer() { // Cancel a pending automatic photo change.
    clearTimeout(timer); // Cancel the pending timed action.
    timer = null; // Update timer.
  } // Finish this block or collection.
  function schedule() { // Arrange the next automatic photo change.
    clearTimer(); // Cancel a pending automatic photo change.
    if (!disposed && !paused && photos.length > 1) { // Continue only when the condition in brackets is met.
      timer = setTimeout(() => show(index + 1), 1500); // Show the next photo after 1.5 seconds.
    } // Finish this block or collection.
  } // Finish this block or collection.
  async function show(next) { // Load a requested photo and fade it in when ready.
    clearTimer(); // Cancel a pending automatic photo change.
    const token = ++request; // Store token for this part of the page.
    const nextIndex = (next + photos.length) % photos.length; // Store next index for this part of the page.
    const image = photos[nextIndex]; // Store image for this part of the page.
    if (!image) return; // Continue only when the condition in brackets is met.
    if (!image.getAttribute('src')) image.src = image.dataset.src; // Continue only when the condition in brackets is met.
    try { // Attempt this operation and handle any failure below.
      await image.decode(); // Wait for this operation before continuing.
    } catch { // Handle a failure so the rest of the page can continue.
      if (!disposed && token === request) { // Continue only when the condition in brackets is met.
        onError('This photo could not load. Try another view.'); // Run on error.
        paused = true; // Update paused.
      } // Finish this block or collection.
      return; // Stop this function because no more work is needed.
    } // Finish this block or collection.
    if (disposed || token !== request) return; // Continue only when the condition in brackets is met.
    photos.forEach((photo, i) => photo.classList.toggle('is-active', i === nextIndex)); // Update the styling state of this element.
    index = nextIndex; // Update index.
    onSelect(index, photoAngle(image.getAttribute('src'))); // Run on select.
    schedule(); // Arrange the next automatic photo change.
  } // Finish this block or collection.
  onSelect(0, photoAngle(photos[0].getAttribute('src') || photos[0].dataset.src)); // Run on select.
  schedule(); // Arrange the next automatic photo change.
  return { // Send this result back to the code that called this function.
    next: () => show(index + 1), // Set the next value.
    previous: () => show(index - 1), // Set the previous value.
    setPaused(value) { // Run set paused.
      paused = value; // Update paused.
      schedule(); // Arrange the next automatic photo change.
    }, // Finish this block or collection.
    get paused() { // Continue the current calculation, element setup or callback.
      return paused; // Send this result back to the code that called this function.
    }, // Finish this block or collection.
    destroy() { // Run destroy.
      disposed = true; // Update disposed.
      request += 1; // Update request.
      clearTimer(); // Cancel a pending automatic photo change.
    } // Finish this block or collection.
  }; // Finish this block or collection.
} // Finish this block or collection.
function setupPhotoCrossfade(card) { // Connect desktop hover and tap or keyboard opening for this product.
  const trigger = card.querySelector('.product-photo-trigger'); // Store trigger for this part of the page.
  if (!trigger) return; // Continue only when the condition in brackets is met.
  const photos = Array.from(trigger.querySelectorAll('.menu-item-photo')); // Store photos for this part of the page.
  const name = card.querySelector('.menu-item-name').textContent; // Store name for this part of the page.
  trigger.addEventListener('pointerenter', event => { // Respond when the pointer enters this product.
    if (event.pointerType !== 'mouse' || !productHoverQuery.matches || prefersReducedMotionQuery.matches || productDialog.open) return; // Continue only when the condition in brackets is met.
    stopDesktopPreview(); // Return the active product photo to its menu card.
    card.classList.add('is-product-preview'); // Update the styling state of this element.
    const player = createProductPlayer(photos); // Store player for this part of the page.
    stopDesktopProduct = () => { // Update stop desktop product.
      player.destroy(); // Continue the current calculation, element setup or callback.
      card.classList.remove('is-product-preview'); // Update the styling state of this element.
      photos.forEach((photo, i) => photo.classList.toggle('is-active', i === 0)); // Update the styling state of this element.
      stopDesktopProduct = null; // Update stop desktop product.
    }; // Finish this block or collection.
  }); // Finish and connect this callback or setup block.
  trigger.addEventListener('pointerleave', () => { // Respond when the pointer leaves.
    if (card.classList.contains('is-product-preview')) stopDesktopPreview(); // Continue only when the condition in brackets is met.
  }); // Finish and connect this callback or setup block.
  trigger.addEventListener('click', () => openProductViewer(trigger, name, photos)); // Respond when this control is clicked.
} // Finish this block or collection.
function updateProductPause() { // Keep the pause button in sync with playback.
  const paused = !modalProductPlayer || modalProductPlayer.paused; // Store paused for this part of the page.
  productPause.textContent = paused ? 'Play views' : 'Pause views'; // Update the words or number shown in this element.
  productPause.setAttribute('aria-pressed', String(paused)); // Update an element setting or its accessible description.
  productPause.disabled = prefersReducedMotionQuery.matches; // Update product pause disabled.
} // Finish this block or collection.
function openProductViewer(trigger, name, photos) { // Open the enlarged product photos above the dimmed page.
  stopDesktopPreview(); // Return the active product photo to its menu card.
  if (productDialog.open) return; // Continue only when the condition in brackets is met.
  modalProductTrigger = trigger; // Update modal product trigger.
  productTitle.textContent = name; // Update the words or number shown in this element.
  productStatus.textContent = ''; // Update the words or number shown in this element.
  productStage.replaceChildren(); // Clear or replace the contents of this container.
  const copies = photos.map((photo, index) => { // Store copies for this part of the page.
    const copy = photo.cloneNode(false); // Store copy for this part of the page.
    copy.classList.toggle('is-active', index === 0); // Update the styling state of this element.
    copy.loading = 'eager'; // Update copy loading.
    productStage.appendChild(copy); // Add this element to its visible container.
    return copy; // Send this result back to the code that called this function.
  }); // Finish and connect this callback or setup block.
  productDialog.showModal(); // Continue the current calculation, element setup or callback.
  document.documentElement.classList.add('product-view-open'); // Update the styling state of this element.
  if (lenis) lenis.stop(); // Continue only when the condition in brackets is met.
  const cursor = document.querySelector('.custom-cursor'); // Store cursor for this part of the page.
  if (cursor) { // Continue only when the condition in brackets is met.
    productCursorHome = { // Update product cursor home.
      parent: cursor.parentNode, // Set the parent value.
      next: cursor.nextSibling // Set the next value.
    }; // Finish this block or collection.
    productDialog.appendChild(cursor); // Add this element to its visible container.
  } // Finish this block or collection.
  modalProductPlayer = createProductPlayer(copies, (index, angle) => { // Update modal product player.
    productCount.textContent = index + 1 + " / " + copies.length + " · " + angle; // Update the words or number shown in this element.
    productStatus.textContent = ''; // Update the words or number shown in this element.
  }, message => { // Continue the current calculation, element setup or callback.
    productStatus.textContent = message; // Update the words or number shown in this element.
    productPause.textContent = 'Play views'; // Update the words or number shown in this element.
    productPause.setAttribute('aria-pressed', 'true'); // Update an element setting or its accessible description.
  }); // Finish and connect this callback or setup block.
  updateProductPause(); // Keep the pause button in sync with playback.
  document.getElementById('product-viewer-close').focus({ // Move keyboard focus without scrolling the page.
    preventScroll: true // Set the prevent scroll value.
  }); // Finish and connect this callback or setup block.
} // Finish this block or collection.
function closeProductViewer() { // Close the enlarged product view.
  if (productDialog.open) productDialog.close(); // Continue only when the condition in brackets is met.
} // Finish this block or collection.
productDialog.addEventListener('close', () => { // Respond when the product dialog closes.
  if (modalProductPlayer) modalProductPlayer.destroy(); // Continue only when the condition in brackets is met.
  modalProductPlayer = null; // Update modal product player.
  const cursor = productDialog.querySelector('.custom-cursor'); // Store cursor for this part of the page.
  if (cursor && productCursorHome) { // Continue only when the condition in brackets is met.
    productCursorHome.parent.insertBefore(cursor, productCursorHome.next); // Continue the current calculation, element setup or callback.
  } // Finish this block or collection.
  productCursorHome = null; // Update product cursor home.
  productDialog.querySelectorAll('.cursor-sparkle').forEach(sparkle => sparkle.remove()); // Repeat this work for each item in the collection.
  document.documentElement.classList.remove('product-view-open'); // Update the styling state of this element.
  if (lenis && document.getElementById('cart-panel').hidden) lenis.start(); // Continue only when the condition in brackets is met.
  if (modalProductTrigger && modalProductTrigger.isConnected) { // Continue only when the condition in brackets is met.
    modalProductTrigger.focus({ // Move keyboard focus without scrolling the page.
      preventScroll: true // Set the prevent scroll value.
    }); // Finish and connect this callback or setup block.
  } // Finish this block or collection.
  modalProductTrigger = null; // Update modal product trigger.
  productStage.replaceChildren(); // Clear or replace the contents of this container.
}); // Finish and connect this callback or setup block.
productDialog.addEventListener('click', event => { // Respond when this control is clicked.
  if (event.target === productDialog) closeProductViewer(); // Continue only when the condition in brackets is met.
}); // Finish and connect this callback or setup block.
document.getElementById('product-viewer-close').addEventListener('click', closeProductViewer); // Respond when this control is clicked.
document.getElementById('product-viewer-next').addEventListener('click', () => modalProductPlayer?.next()); // Respond when this control is clicked.
document.getElementById('product-viewer-previous').addEventListener('click', () => modalProductPlayer?.previous()); // Respond when this control is clicked.
productPause.addEventListener('click', () => { // Respond when this control is clicked.
  if (!modalProductPlayer) return; // Continue only when the condition in brackets is met.
  modalProductPlayer.setPaused(!modalProductPlayer.paused); // Continue the current calculation, element setup or callback.
  updateProductPause(); // Keep the pause button in sync with playback.
}); // Finish and connect this callback or setup block.
productDialog.addEventListener('keydown', event => { // Respond when a key is pressed.
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { // Continue only when the condition in brackets is met.
    event.preventDefault(); // Use the custom behavior instead of the browser’s default action.
    if (event.key === 'ArrowRight') modalProductPlayer?.next();else modalProductPlayer?.previous(); // Continue only when the condition in brackets is met.
  } // Finish this block or collection.
}); // Finish and connect this callback or setup block.
productHoverQuery.addEventListener('change', stopDesktopPreview); // Respond when this value or device preference changes.
prefersReducedMotionQuery.addEventListener('change', () => { // Respond when this value or device preference changes.
  stopDesktopPreview(); // Return the active product photo to its menu card.
  if (modalProductPlayer) modalProductPlayer.setPaused(true); // Continue only when the condition in brackets is met.
  updateProductPause(); // Keep the pause button in sync with playback.
}); // Finish and connect this callback or setup block.
document.addEventListener('visibilitychange', () => { // Respond when the page becomes hidden or visible.
  if (!document.hidden) return; // Continue only when the condition in brackets is met.
  stopDesktopPreview(); // Return the active product photo to its menu card.
  if (modalProductPlayer) modalProductPlayer.setPaused(true); // Continue only when the condition in brackets is met.
  updateProductPause(); // Keep the pause button in sync with playback.
}); // Finish and connect this callback or setup block.
function renderCartLines(container, { // Display the items in the cart or order summary.
  showRemove // Continue the current calculation, element setup or callback.
}) { // Continue the current calculation, element setup or callback.
  container.innerHTML = ''; // Build the visible contents of this element.
  if (cart.length === 0) { // Continue only when the condition in brackets is met.
    const empty = document.createElement('p'); // Store empty for this part of the page.
    empty.className = 'cart-empty'; // Update empty class name.
    empty.innerHTML = 'Nothing here yet — <a href="#menu">pick something sweet from the menu</a>.'; // Build the visible contents of this element.
    container.appendChild(empty); // Add this element to its visible container.
    return; // Stop this function because no more work is needed.
  } // Finish this block or collection.
  cart.forEach((line, index) => { // Repeat this work for each item in the collection.
    const row = document.createElement('div'); // Store row for this part of the page.
    row.className = 'cart-line'; // Update row class name.
    row.innerHTML = "\n      <div class=\"cart-line-info\">\n        <span class=\"cart-line-name\">" + line.name + (line.size ? " — " + line.size : '') + "</span>\n        <span class=\"cart-line-meta\">Qty " + line.qty + " × " + formatPrice(line.unitPrice) + "</span>\n      </div>\n      <div class=\"cart-line-right\">\n        <span class=\"cart-line-price\">" + formatPrice(cartLineTotal(line)) + "</span>\n        " + (showRemove ? '<button type="button" class="cart-line-remove">Remove</button>' : '') + "\n      </div>\n    "; // Build the visible contents of this element.
    if (showRemove) { // Continue only when the condition in brackets is met.
      row.querySelector('.cart-line-remove').addEventListener('click', () => removeFromCart(index)); // Respond when this control is clicked.
    } // Finish this block or collection.
    container.appendChild(row); // Add this element to its visible container.
  }); // Finish and connect this callback or setup block.
} // Finish this block or collection.
function renderCart() { // Refresh the cart count, total and checkout summary.
  const fabCount = document.getElementById('cart-fab-count'); // Store fab count for this part of the page.
  document.body.classList.toggle('has-cart', cart.length > 0); // Update the styling state of this element.
  const totalCount = cart.reduce((sum, l) => sum + l.qty, 0); // Store total count for this part of the page.
  fabCount.textContent = totalCount; // Update the words or number shown in this element.
  fabCount.hidden = totalCount === 0; // Update fab count hidden.
  renderCartLines(document.getElementById('cart-panel-body'), { // Display the items in the cart or order summary.
    showRemove: true // Set the show remove value.
  }); // Finish and connect this callback or setup block.
  document.getElementById('cart-total').textContent = formatPrice(cartTotal()); // Update the words or number shown in this element.
  const summaryBody = document.getElementById('checkout-summary-body'); // Store summary body for this part of the page.
  const summaryTotal = document.getElementById('checkout-summary-total'); // Store summary total for this part of the page.
  if (summaryBody) { // Continue only when the condition in brackets is met.
    renderCartLines(summaryBody, { // Display the items in the cart or order summary.
      showRemove: false // Set the show remove value.
    }); // Finish and connect this callback or setup block.
    if (cart.length > 0) { // Continue only when the condition in brackets is met.
      summaryTotal.hidden = false; // Update summary total hidden.
      document.getElementById('checkout-total-amount').textContent = formatPrice(cartTotal()); // Update the words or number shown in this element.
    } else { // Handle the alternative case.
      summaryTotal.hidden = true; // Update summary total hidden.
    } // Finish this block or collection.
  } // Finish this block or collection.
} // Finish this block or collection.
const cartFab = document.getElementById('cart-fab'); // Store cart fab for this part of the page.
const cartPanel = document.getElementById('cart-panel'); // Store cart panel for this part of the page.
const cartOverlay = document.getElementById('cart-overlay'); // Store cart overlay for this part of the page.
const cartCloseBtn = document.getElementById('cart-close-btn'); // Store cart close btn for this part of the page.
function openCart() { // Show the shopping cart and pause background scrolling.
  stopDesktopPreview(); // Return the active product photo to its menu card.
  if (lenis) lenis.stop(); // Continue only when the condition in brackets is met.
  cartPanel.hidden = false; // Update cart panel hidden.
  cartOverlay.hidden = false; // Update cart overlay hidden.
} // Finish this block or collection.
function closeCart() { // Hide the shopping cart and restore scrolling.
  cartPanel.hidden = true; // Update cart panel hidden.
  cartOverlay.hidden = true; // Update cart overlay hidden.
  if (lenis) lenis.start(); // Continue only when the condition in brackets is met.
} // Finish this block or collection.
if (cartFab) cartFab.addEventListener('click', openCart); // Respond when this control is clicked.
if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart); // Respond when this control is clicked.
if (cartOverlay) cartOverlay.addEventListener('click', closeCart); // Respond when this control is clicked.
const cartCheckoutBtn = document.getElementById('cart-checkout-btn'); // Store cart checkout btn for this part of the page.
if (cartCheckoutBtn) { // Continue only when the condition in brackets is met.
  cartCheckoutBtn.addEventListener('click', closeCart); // Respond when this control is clicked.
} // Finish this block or collection.
loadCart(); // Restore previously saved cart items.
renderMenu(); // Build the product cards with photos, prices and quantity controls.
renderCart(); // Refresh the cart count, total and checkout summary.
observeMenuCards(); // Reveal menu cards as they enter the visible page.
setupMenuCardTilt(); // Make menu cards gently tilt toward the mouse.
function setupMenuCardTilt() { // Make menu cards gently tilt toward the mouse.
  const cards = document.querySelectorAll('.menu-item-card'); // Store cards for this part of the page.
  if (!cards.length) return; // Continue only when the condition in brackets is met.
  const supportsFineHoverMenu = window.matchMedia('(hover: hover) and (pointer: fine)').matches; // Store supports fine hover menu for this part of the page.
  const prefersReducedMotionMenu = window.matchMedia('(prefers-reduced-motion: reduce)').matches; // Store prefers reduced motion menu for this part of the page.
  if (!supportsFineHoverMenu || prefersReducedMotionMenu) return; // Continue only when the condition in brackets is met.
  const MAX_TILT_DEG_MENU = 6; // Store max tilt deg menu for this part of the page.
  cards.forEach(card => { // Repeat this work for each item in the collection.
    card.addEventListener('mousemove', e => { // Respond when the mouse moves.
      const rect = card.getBoundingClientRect(); // Store rect for this part of the page.
      const px = (e.clientX - rect.left) / rect.width; // Store px for this part of the page.
      const py = (e.clientY - rect.top) / rect.height; // Store py for this part of the page.
      const rotateY = (px - 0.5) * MAX_TILT_DEG_MENU * 2; // Store rotate y for this part of the page.
      const rotateX = (0.5 - py) * MAX_TILT_DEG_MENU * 2; // Store rotate x for this part of the page.
      card.classList.add('is-tilting'); // Update the styling state of this element.
      card.style.transform = "perspective(1000px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)"; // Update the appearance or position of this element.
    }); // Finish and connect this callback or setup block.
    card.addEventListener('mouseleave', () => { // Respond when the mouse leaves.
      card.classList.remove('is-tilting'); // Update the styling state of this element.
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'; // Update the appearance or position of this element.
    }); // Finish and connect this callback or setup block.
  }); // Finish and connect this callback or setup block.
} // Finish this block or collection.
function observeMenuCards() { // Reveal menu cards as they enter the visible page.
  const cards = document.querySelectorAll('.menu-item-card'); // Store cards for this part of the page.
  if (!cards.length) return; // Continue only when the condition in brackets is met.
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches; // Store prefers reduced motion for this part of the page.
  if (prefersReducedMotion) { // Continue only when the condition in brackets is met.
    cards.forEach(c => c.classList.add('is-visible')); // Update the styling state of this element.
    return; // Stop this function because no more work is needed.
  } // Finish this block or collection.
  const observer = new IntersectionObserver(entries => { // Store observer for this part of the page.
    entries.forEach(entry => { // Repeat this work for each item in the collection.
      if (entry.isIntersecting) { // Continue only when the condition in brackets is met.
        entry.target.classList.add('is-visible'); // Update the styling state of this element.
        observer.unobserve(entry.target); // Continue the current calculation, element setup or callback.
      } // Finish this block or collection.
    }); // Finish and connect this callback or setup block.
  }, { // Continue the current calculation, element setup or callback.
    threshold: 0.3, // Set the threshold value.
    rootMargin: '0px 0px -60px 0px' // Set the root margin value.
  }); // Finish and connect this callback or setup block.
  cards.forEach(card => observer.observe(card)); // Repeat this work for each item in the collection.
} // Finish this block or collection.
const orderForm = document.getElementById('order-form'); // Store order form for this part of the page.
if (orderForm) { // Continue only when the condition in brackets is met.
  const fulfillmentRadios = orderForm.querySelectorAll('input[name="fulfillment"]'); // Store fulfillment radios for this part of the page.
  const addressRow = document.getElementById('address-row'); // Store address row for this part of the page.
  const addressField = document.getElementById('of-address'); // Store address field for this part of the page.
  function updateAddressVisibility() { // Define how to update address visibility.
    const selected = orderForm.querySelector('input[name="fulfillment"]:checked'); // Store selected for this part of the page.
    const isDelivery = selected && selected.value === 'Delivery'; // Store is delivery for this part of the page.
    addressRow.hidden = !isDelivery; // Update address row hidden.
    if (isDelivery) { // Continue only when the condition in brackets is met.
      addressField.setAttribute('required', 'required'); // Update an element setting or its accessible description.
    } else { // Handle the alternative case.
      addressField.removeAttribute('required'); // Remove an element setting that is no longer needed.
    } // Finish this block or collection.
  } // Finish this block or collection.
  fulfillmentRadios.forEach(radio => { // Repeat this work for each item in the collection.
    radio.addEventListener('change', updateAddressVisibility); // Respond when this value or device preference changes.
  }); // Finish and connect this callback or setup block.
  updateAddressVisibility(); // Run update address visibility.
  function buildWhatsAppMessage(form) { // Prepare the order details for the customer’s WhatsApp message.
    const get = name => (form.elements[name] ? form.elements[name].value : '').trim(); // Store get for this part of the page.
    const fulfillment = form.querySelector('input[name="fulfillment"]:checked'); // Store fulfillment for this part of the page.
    const lines = ["Hi! I'd like to place an order with butttercloud 🍰", "", "Name: " + get('name'), "Phone: " + get('phone'), "Date needed: " + get('date_needed'), "", "Order:", ...cart.map(line => "- " + line.name + (line.size ? " (" + line.size + ")" : '') + " x" + line.qty + " — " + formatPrice(cartLineTotal(line))), "Total: " + formatPrice(cartTotal()), "", "" + (fulfillment ? fulfillment.value : '') + (fulfillment && fulfillment.value === 'Delivery' ? " — " + get('address') : '')]; // Store lines for this part of the page.
    const message = get('message'); // Store message for this part of the page.
    if (message) { // Continue only when the condition in brackets is met.
      lines.push("Notes: " + message); // Continue the current calculation, element setup or callback.
    } // Finish this block or collection.
    return lines.join('\n'); // Send this result back to the code that called this function.
  } // Finish this block or collection.
  const submitButton = orderForm.querySelector('[type="submit"]'); // Store submit button for this part of the page.
  const whatsappLink = document.getElementById('order-whatsapp'); // Store whatsapp link for this part of the page.
  let submitting = false; // Keep track of submitting for this part of the page.
  ['name', 'phone'].forEach(name => { // Repeat this work for each item in the collection.
    orderForm.elements[name].addEventListener('input', () => { // Respond when input occurs.
      orderForm.elements[name].setCustomValidity(''); // Continue the current calculation, element setup or callback.
    }); // Finish and connect this callback or setup block.
  }); // Finish and connect this callback or setup block.
  orderForm.addEventListener('submit', async function (e) { // Respond when the order form is submitted.
    e.preventDefault(); // Use the custom behavior instead of the browser’s default action.
    if (submitting) return; // Continue only when the condition in brackets is met.
    const statusEl = document.getElementById('order-status'); // Store status el for this part of the page.
    statusEl.textContent = ''; // Update the words or number shown in this element.
    statusEl.classList.remove('is-error', 'is-success'); // Update the styling state of this element.
    whatsappLink.hidden = true; // Update whatsapp link hidden.
    if (cart.length === 0) { // Continue only when the condition in brackets is met.
      statusEl.textContent = 'Pick something sweet from the menu before placing your order.'; // Update the words or number shown in this element.
      statusEl.classList.add('is-error'); // Update the styling state of this element.
      return; // Stop this function because no more work is needed.
    } // Finish this block or collection.
    ['name', 'phone'].forEach(name => { // Repeat this work for each item in the collection.
      const field = orderForm.elements[name]; // Store field for this part of the page.
      field.value = field.value.trim(); // Update field value.
      field.setCustomValidity(field.value ? '' : 'Please fill out this field.'); // Continue the current calculation, element setup or callback.
    }); // Finish and connect this callback or setup block.
    if (!orderForm.reportValidity()) return; // Continue only when the condition in brackets is met.
    const message = buildWhatsAppMessage(orderForm); // Store message for this part of the page.
    const waUrl = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message); // Store wa url for this part of the page.
    const items = cart.map(line => "" + line.name + (line.size ? " (" + line.size + ")" : '') + " — Qty " + line.qty + " × " + formatPrice(line.unitPrice) + " = " + formatPrice(cartLineTotal(line))).join('\n'); // Store items for this part of the page.
    document.getElementById('cart-items-field').value = items; // Continue the current calculation, element setup or callback.
    const formData = new FormData(orderForm); // Store form data for this part of the page.
    formData.set('total', formatPrice(cartTotal())); // Continue the current calculation, element setup or callback.
    formData.set('order_summary', message); // Continue the current calculation, element setup or callback.
    if (formData.get('fulfillment') !== 'Delivery') formData.set('address', ''); // Continue only when the condition in brackets is met.
    submitting = true; // Update submitting.
    submitButton.disabled = true; // Update submit button disabled.
    submitButton.textContent = 'Sending…'; // Update the words or number shown in this element.
    statusEl.textContent = 'Sending your order details — just a moment…'; // Update the words or number shown in this element.
    let whatsappWindow = null; // Keep track of whatsapp window for this part of the page.
    try { // Attempt this operation and handle any failure below.
      whatsappWindow = window.open('about:blank', '_blank'); // Update whatsapp window.
      if (whatsappWindow) whatsappWindow.opener = null; // Continue only when the condition in brackets is met.
    } catch (_) {} // Handle a failure so the rest of the page can continue.
    const requestController = new AbortController(); // Store request controller for this part of the page.
    const requestTimeout = setTimeout(() => requestController.abort(), 20000); // Store request timeout for this part of the page.
    try { // Attempt this operation and handle any failure below.
      const response = await fetch(FORMSPREE_ENDPOINT, { // Store response for this part of the page.
        signal: requestController.signal, // Set the signal value.
        method: 'POST', // Set the method value.
        body: formData, // Set the body value.
        headers: { // Set the headers value.
          Accept: 'application/json' // Set the accept value.
        } // Finish this block or collection.
      }); // Finish and connect this callback or setup block.
      if (!response.ok) throw new Error('Order submission failed'); // Continue only when the condition in brackets is met.
      orderForm.reset(); // Continue the current calculation, element setup or callback.
      document.getElementById('cart-items-field').value = ''; // Continue the current calculation, element setup or callback.
      updateAddressVisibility(); // Run update address visibility.
      cart = []; // Update cart.
      saveCart(); // Save the current cart on this device.
      renderCart(); // Refresh the cart count, total and checkout summary.
      closeCart(); // Hide the shopping cart and restore scrolling.
      whatsappLink.href = waUrl; // Update whatsapp link href.
      whatsappLink.hidden = false; // Update whatsapp link hidden.
      statusEl.textContent = 'Your order details are saved! Send the ready-to-go WhatsApp message to confirm your order. If WhatsApp did not open, tap Continue on WhatsApp below.'; // Update the words or number shown in this element.
      statusEl.classList.add('is-success'); // Update the styling state of this element.
      showCartToast('Order placed! Check WhatsApp to confirm.', { icon: '🎉', duration: 3200, isOrderSuccess: true }); // Give a clearly visible confirmation even after the cart panel has closed.
      if (whatsappWindow && !whatsappWindow.closed) { // Continue only when the condition in brackets is met.
        try { // Attempt this operation and handle any failure below.
          whatsappWindow.location.replace(waUrl); // Continue the current calculation, element setup or callback.
        } catch (_) {} // Handle a failure so the rest of the page can continue.
      } // Finish this block or collection.
    } catch (err) { // Handle a failure so the rest of the page can continue.
      if (whatsappWindow && !whatsappWindow.closed) whatsappWindow.close(); // Continue only when the condition in brackets is met.
      statusEl.textContent = 'Something went wrong, so we could not confirm your order details were saved. Your cart and details are still here. Try again, or tap Continue on WhatsApp below to send your order.'; // Update the words or number shown in this element.
      statusEl.classList.add('is-error'); // Update the styling state of this element.
      whatsappLink.href = waUrl; // Update whatsapp link href.
      whatsappLink.hidden = false; // Update whatsapp link hidden.
    } finally { // Run this cleanup whether the operation succeeds or fails.
      clearTimeout(requestTimeout); // Cancel the pending timed action.
      submitting = false; // Update submitting.
      submitButton.disabled = false; // Update submit button disabled.
      submitButton.textContent = 'Place Order'; // Update the words or number shown in this element.
    } // Finish this block or collection.
  }); // Finish and connect this callback or setup block.
  submitButton.disabled = false; // Update submit button disabled.
} // Finish this block or collection.
const footerYear = document.getElementById('footer-year'); // Store footer year for this part of the page.
if (footerYear) { // Continue only when the condition in brackets is met.
  footerYear.textContent = new Date().getFullYear(); // Update the words or number shown in this element.
} // Finish this block or collection.
const footerWhatsappLink = document.getElementById('footer-whatsapp-link'); // Store footer whatsapp link for this part of the page.
if (footerWhatsappLink) { // Continue only when the condition in brackets is met.
  const whatsappReady = WHATSAPP_NUMBER && !WHATSAPP_NUMBER.includes('XXXX'); // Store whatsapp ready for this part of the page.
  if (whatsappReady) { // Continue only when the condition in brackets is met.
    footerWhatsappLink.href = "https://wa.me/" + WHATSAPP_NUMBER; // Update footer whatsapp link href.
  } else { // Handle the alternative case.
    footerWhatsappLink.href = '#place-order'; // Update footer whatsapp link href.
    footerWhatsappLink.removeAttribute('target'); // Remove an element setting that is no longer needed.
  } // Finish this block or collection.
} // Finish this block or collection.
const galleryTiltItems = document.querySelectorAll('.gallery-item:not(.gallery-item--placeholder)'); // Store gallery tilt items for this part of the page.
const supportsFineHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches; // Store supports fine hover for this part of the page.
const prefersReducedMotionGallery = window.matchMedia('(prefers-reduced-motion: reduce)').matches; // Store prefers reduced motion gallery for this part of the page.
if (galleryTiltItems.length && supportsFineHover && !prefersReducedMotionGallery) { // Continue only when the condition in brackets is met.
  const MAX_TILT_DEG = 9; // Store max tilt deg for this part of the page.
  galleryTiltItems.forEach(item => { // Repeat this work for each item in the collection.
    item.addEventListener('mousemove', e => { // Respond when the mouse moves.
      const rect = item.getBoundingClientRect(); // Store rect for this part of the page.
      const px = (e.clientX - rect.left) / rect.width; // Store px for this part of the page.
      const py = (e.clientY - rect.top) / rect.height; // Store py for this part of the page.
      const rotateY = (px - 0.5) * MAX_TILT_DEG * 2; // Store rotate y for this part of the page.
      const rotateX = (0.5 - py) * MAX_TILT_DEG * 2; // Store rotate x for this part of the page.
      item.classList.add('is-tilting'); // Update the styling state of this element.
      item.style.setProperty('--mx', px * 100 + "%"); // Update the appearance or position of this element.
      item.style.setProperty('--my', py * 100 + "%"); // Update the appearance or position of this element.
      item.style.transform = "perspective(900px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) scale(1.05)"; // Update the appearance or position of this element.
    }); // Finish and connect this callback or setup block.
    item.addEventListener('mouseleave', () => { // Respond when the mouse leaves.
      item.classList.remove('is-tilting'); // Update the styling state of this element.
      item.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)'; // Update the appearance or position of this element.
    }); // Finish and connect this callback or setup block.
  }); // Finish and connect this callback or setup block.
} // Finish this block or collection.
const galleryGrid = document.getElementById('gallery-grid'); // Store gallery grid for this part of the page.
if (galleryGrid) { // Continue only when the condition in brackets is met.
  galleryGrid.addEventListener('click', e => { // Respond when this control is clicked.
    const item = e.target.closest('.gallery-item'); // Store item for this part of the page.
    if (!item || item.classList.contains('gallery-item--placeholder')) return; // Continue only when the condition in brackets is met.
    const img = item.querySelector('img'); // Store img for this part of the page.
    if (!img) return; // Continue only when the condition in brackets is met.
    const lightbox = document.createElement('div'); // Store lightbox for this part of the page.
    lightbox.className = 'gallery-lightbox'; // Update lightbox class name.
    lightbox.innerHTML = "\n      <button type=\"button\" class=\"gallery-lightbox-close\" aria-label=\"Close\">&times;</button>\n      <img src=\"" + img.src + "\" alt=\"" + img.alt + "\">\n    "; // Build the visible contents of this element.
    document.body.appendChild(lightbox); // Add this element to its visible container.
    requestAnimationFrame(() => { // Update on the next screen refresh for smooth movement.
      requestAnimationFrame(() => { // Update on the next screen refresh for smooth movement.
        lightbox.classList.add('is-open'); // Update the styling state of this element.
      }); // Finish and connect this callback or setup block.
    }); // Finish and connect this callback or setup block.
    function closeLightbox() { // Define how to close lightbox.
      if (prefersReducedMotionGallery) { // Continue only when the condition in brackets is met.
        lightbox.remove(); // Continue the current calculation, element setup or callback.
        return; // Stop this function because no more work is needed.
      } // Finish this block or collection.
      lightbox.classList.remove('is-open'); // Update the styling state of this element.
      lightbox.addEventListener('transitionend', () => lightbox.remove(), { // Respond when transitionend occurs.
        once: true // Set the once value.
      }); // Finish and connect this callback or setup block.
    } // Finish this block or collection.
    lightbox.addEventListener('click', evt => { // Respond when this control is clicked.
      if (evt.target === lightbox || evt.target.classList.contains('gallery-lightbox-close')) { // Continue only when the condition in brackets is met.
        closeLightbox(); // Run close lightbox.
      } // Finish this block or collection.
    }); // Finish and connect this callback or setup block.
    document.addEventListener('keydown', function escHandler(evt) { // Respond when a key is pressed.
      if (evt.key === 'Escape') { // Continue only when the condition in brackets is met.
        closeLightbox(); // Run close lightbox.
        document.removeEventListener('keydown', escHandler); // Continue the current calculation, element setup or callback.
      } // Finish this block or collection.
    }); // Finish and connect this callback or setup block.
  }); // Finish and connect this callback or setup block.
} // Finish this block or collection.
const mascotBtn = document.getElementById('mascot-companion'); // Store mascot btn for this part of the page.
const mascotImg = document.getElementById('mascot-companion-img'); // Store mascot img for this part of the page.
if (mascotBtn && mascotImg) { // Continue only when the condition in brackets is met.
  const IDLE_SRC = 'mascot/companion-idle.webp'; // Store idle src for this part of the page.
  const BLINK_SRC = 'mascot/companion-blink.webp'; // Store blink src for this part of the page.
  const WAVE_SRC = 'mascot/companion-wave.webp'; // Store wave src for this part of the page.
  let idleTimer = null; // Keep track of idle timer for this part of the page.
  let isWaving = false; // Keep track of is waving for this part of the page.
  function scheduleBlink() { // Define how to schedule blink.
    const delay = 3000 + Math.random() * 4000; // Store delay for this part of the page.
    idleTimer = setTimeout(() => { // Schedule a one-time action after the stated delay.
      if (!isWaving) { // Continue only when the condition in brackets is met.
        mascotImg.src = BLINK_SRC; // Update mascot img src.
        setTimeout(() => { // Schedule a one-time action after the stated delay.
          if (!isWaving) mascotImg.src = IDLE_SRC; // Continue only when the condition in brackets is met.
        }, 180); // Continue the current calculation, element setup or callback.
      } // Finish this block or collection.
      scheduleBlink(); // Run schedule blink.
    }, delay); // Continue the current calculation, element setup or callback.
  } // Finish this block or collection.
  function playWave() { // Define how to play wave.
    isWaving = true; // Update is waving.
    mascotImg.src = WAVE_SRC; // Update mascot img src.
    setTimeout(() => { // Schedule a one-time action after the stated delay.
      isWaving = false; // Update is waving.
      mascotImg.src = IDLE_SRC; // Update mascot img src.
    }, 900); // Continue the current calculation, element setup or callback.
  } // Finish this block or collection.
  mascotBtn.addEventListener('mouseenter', playWave); // Respond when mouseenter occurs.
  mascotBtn.addEventListener('click', playWave); // Respond when this control is clicked.
  mascotBtn.addEventListener('focus', playWave); // Respond when focus occurs.
  scheduleBlink(); // Run schedule blink.
} // Finish this block or collection.
const heroSection = document.getElementById('hero'); // Store hero section for this part of the page.
const heroStage = document.querySelector('.hero-3d-stage'); // Store hero stage for this part of the page.
const heroCupcakeTilt = document.querySelector('.hero-cupcake-tilt'); // Store hero cupcake tilt for this part of the page.
if (heroSection && heroStage && heroCupcakeTilt) { // Continue only when the condition in brackets is met.
  const supportsFineHoverHero = window.matchMedia('(hover: hover) and (pointer: fine)').matches; // Store supports fine hover hero for this part of the page.
  const prefersReducedMotionHero = window.matchMedia('(prefers-reduced-motion: reduce)').matches; // Store prefers reduced motion hero for this part of the page.
  if (supportsFineHoverHero && !prefersReducedMotionHero) { // Continue only when the condition in brackets is met.
    const MAX_TILT_DEG_HERO = 14; // Store max tilt deg hero for this part of the page.
    heroSection.addEventListener('mousemove', e => { // Respond when the mouse moves.
      const rect = heroSection.getBoundingClientRect(); // Store rect for this part of the page.
      const px = (e.clientX - rect.left) / rect.width; // Store px for this part of the page.
      const py = (e.clientY - rect.top) / rect.height; // Store py for this part of the page.
      const rotateY = (px - 0.5) * MAX_TILT_DEG_HERO * 2; // Store rotate y for this part of the page.
      const rotateX = (0.5 - py) * MAX_TILT_DEG_HERO * 2; // Store rotate x for this part of the page.
      heroCupcakeTilt.style.transform = "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)"; // Update the appearance or position of this element.
    }); // Finish and connect this callback or setup block.
    heroSection.addEventListener('mouseleave', () => { // Respond when the mouse leaves.
      heroCupcakeTilt.style.transform = ''; // Update the appearance or position of this element.
    }); // Finish and connect this callback or setup block.
  } // Finish this block or collection.
  if (!prefersReducedMotionHero) { // Continue only when the condition in brackets is met.
    let heroParallaxTicking = false; // Keep track of hero parallax ticking for this part of the page.
    function updateHeroParallax() { // Define how to update hero parallax.
      const rect = heroSection.getBoundingClientRect(); // Store rect for this part of the page.
      const progress = Math.min(Math.max(-rect.top / rect.height, 0), 1); // Store progress for this part of the page.
      heroStage.style.transform = "translateY(calc(-50% + " + progress * 60 + "px))"; // Update the appearance or position of this element.
      heroParallaxTicking = false; // Update hero parallax ticking.
    } // Finish this block or collection.
    window.addEventListener('scroll', () => { // Respond when the page scrolls.
      if (!heroParallaxTicking) { // Continue only when the condition in brackets is met.
        window.requestAnimationFrame(updateHeroParallax); // Update on the next screen refresh for smooth movement.
        heroParallaxTicking = true; // Update hero parallax ticking.
      } // Finish this block or collection.
    }, { // Continue the current calculation, element setup or callback.
      passive: true // Set the passive value.
    }); // Finish and connect this callback or setup block.
    updateHeroParallax(); // Run update hero parallax.
  } // Finish this block or collection.
} // Finish this block or collection.
(function () { // Continue the current calculation, element setup or callback.
  const cursor = document.querySelector('.custom-cursor'); // Store cursor for this part of the page.
  if (!cursor) return; // Continue only when the condition in brackets is met.
  const cursorMedia = window.matchMedia('(hover: hover) and (pointer: fine)'); // Store cursor media for this part of the page.
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)'); // Store reduced motion for this part of the page.
  const sparkles = new Map(); // Store sparkles for this part of the page.
  let frame = null; // Keep track of frame for this part of the page.
  let mouseX = 0; // Keep track of mouse x for this part of the page.
  let mouseY = 0; // Keep track of mouse y for this part of the page.
  let lastSparkleTime = 0; // Keep track of last sparkle time for this part of the page.
  let lastSparkleX = 0; // Keep track of last sparkle x for this part of the page.
  let lastSparkleY = 0; // Keep track of last sparkle y for this part of the page.
  function clearSparkles() { // Remove sparkle elements and cancel their cleanup timers.
    sparkles.forEach((timer, sparkle) => { // Repeat this work for each item in the collection.
      clearTimeout(timer); // Cancel the pending timed action.
      sparkle.remove(); // Continue the current calculation, element setup or callback.
    }); // Finish and connect this callback or setup block.
    sparkles.clear(); // Continue the current calculation, element setup or callback.
  } // Finish this block or collection.
  function hideCursor() { // Hide the custom cloud and remove leftover sparkles.
    if (frame !== null) cancelAnimationFrame(frame); // Continue only when the condition in brackets is met.
    frame = null; // Update frame.
    cursor.classList.remove('is-visible'); // Update the styling state of this element.
    document.documentElement.classList.remove('cloud-cursor-active'); // Update the styling state of this element.
    clearSparkles(); // Remove sparkle elements and cancel their cleanup timers.
  } // Finish this block or collection.
  function dropSparkle(now) { // Create a small falling sparkle while the mouse moves.
    if (reducedMotion.matches || sparkles.size >= 7 || now - lastSparkleTime < 110 || Math.hypot(mouseX - lastSparkleX, mouseY - lastSparkleY) < 10) return; // Continue only when the condition in brackets is met.
    lastSparkleTime = now; // Update last sparkle time.
    lastSparkleX = mouseX; // Update last sparkle x.
    lastSparkleY = mouseY; // Update last sparkle y.
    const sparkle = document.createElement('span'); // Store sparkle for this part of the page.
    sparkle.className = 'cursor-sparkle'; // Update sparkle class name.
    sparkle.setAttribute('aria-hidden', 'true'); // Update an element setting or its accessible description.
    sparkle.style.left = mouseX + "px"; // Update the appearance or position of this element.
    sparkle.style.top = mouseY + 7 + "px"; // Update the appearance or position of this element.
    sparkle.style.setProperty('--sparkle-drift', (Math.random() - 0.5) * 14 + "px"); // Update the appearance or position of this element.
    sparkle.style.setProperty('--sparkle-size', 5 + Math.random() * 2 + "px"); // Update the appearance or position of this element.
    (document.querySelector('dialog[open]') || document.body).appendChild(sparkle); // Add this element to its visible container.
    const timer = setTimeout(() => { // Store timer for this part of the page.
      sparkle.remove(); // Continue the current calculation, element setup or callback.
      sparkles.delete(sparkle); // Continue the current calculation, element setup or callback.
    }, 850); // Continue the current calculation, element setup or callback.
    sparkles.set(sparkle, timer); // Continue the current calculation, element setup or callback.
  } // Finish this block or collection.
  document.addEventListener('pointermove', event => { // Respond when the pointer moves.
    if (!cursorMedia.matches || event.pointerType !== 'mouse') { // Continue only when the condition in brackets is met.
      hideCursor(); // Hide the custom cloud and remove leftover sparkles.
      return; // Stop this function because no more work is needed.
    } // Finish this block or collection.
    mouseX = event.clientX; // Update mouse x.
    mouseY = event.clientY; // Update mouse y.
    if (frame !== null) return; // Continue only when the condition in brackets is met.
    frame = requestAnimationFrame(now => { // Update on the next screen refresh for smooth movement.
      cursor.style.transform = "translate3d(" + mouseX + "px, " + mouseY + "px, 0)"; // Update the appearance or position of this element.
      cursor.classList.add('is-visible'); // Update the styling state of this element.
      document.documentElement.classList.add('cloud-cursor-active'); // Update the styling state of this element.
      dropSparkle(now); // Create a small falling sparkle while the mouse moves.
      frame = null; // Update frame.
    }); // Finish and connect this callback or setup block.
  }); // Finish and connect this callback or setup block.
  document.documentElement.addEventListener('pointerleave', hideCursor); // Respond when the pointer leaves.
  window.addEventListener('blur', hideCursor); // Respond when the window loses focus.
  document.addEventListener('visibilitychange', () => { // Respond when the page becomes hidden or visible.
    if (document.hidden) hideCursor(); // Continue only when the condition in brackets is met.
  }); // Finish and connect this callback or setup block.
  cursorMedia.addEventListener('change', hideCursor); // Respond when this value or device preference changes.
  reducedMotion.addEventListener('change', clearSparkles); // Respond when this value or device preference changes.
})(); // Finish and connect this callback or setup block.
(function () { // Continue the current calculation, element setup or callback.
  const isMobile = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768; // Store is mobile for this part of the page.
  if (!isMobile) return; // Continue only when the condition in brackets is met.
  const stickyBar = document.getElementById("mobile-sticky-cart"); // Store sticky bar for this part of the page.
  const stickyCount = document.getElementById("sticky-cart-count"); // Store sticky count for this part of the page.
  const stickyTotal = document.getElementById("sticky-cart-total"); // Store sticky total for this part of the page.
  const stickyTrigger = document.getElementById("sticky-cart-trigger"); // Store sticky trigger for this part of the page.
  if (!stickyBar) return; // Continue only when the condition in brackets is met.
  const originalRenderCart = typeof renderCart === 'function' ? renderCart : null; // Store original render cart for this part of the page.
  function updateMobileStickyBar() { // Define how to update mobile sticky bar.
    if (typeof cart !== 'undefined' && cart.length > 0) { // Continue only when the condition in brackets is met.
      stickyBar.style.display = "block"; // Update the appearance or position of this element.
      const totalCount = cart.reduce((sum, l) => sum + l.qty, 0); // Store total count for this part of the page.
      const totalAmount = cart.reduce((sum, line) => sum + line.unitPrice * line.qty, 0); // Store total amount for this part of the page.
      if (stickyCount) stickyCount.textContent = totalCount; // Continue only when the condition in brackets is met.
      if (stickyTotal) stickyTotal.textContent = "Rs. " + totalAmount.toLocaleString('en-PK'); // Continue only when the condition in brackets is met.
    } else { // Handle the alternative case.
      stickyBar.style.display = "none"; // Update the appearance or position of this element.
    } // Finish this block or collection.
  } // Finish this block or collection.
  if (originalRenderCart) { // Continue only when the condition in brackets is met.
    window.renderCart = function () { // Update window render cart.
      originalRenderCart(); // Run original render cart.
      updateMobileStickyBar(); // Run update mobile sticky bar.
    }; // Finish this block or collection.
  } // Finish this block or collection.
  if (stickyTrigger) { // Continue only when the condition in brackets is met.
    stickyTrigger.addEventListener("click", () => { // Respond when this control is clicked.
      if (typeof openCart === "function") { // Continue only when the condition in brackets is met.
        openCart(); // Show the shopping cart and pause background scrolling.
      } // Finish this block or collection.
    }); // Finish and connect this callback or setup block.
  } // Finish this block or collection.
  setTimeout(updateMobileStickyBar, 200); // Schedule a one-time action after the stated delay.
})(); // Finish and connect this callback or setup block.

// Story Part 7: enhance suitable desktop layouts; keep touch, reduced-motion and constrained layouts fully readable.
(() => { // Keep this feature's variables separate from the other scroll features.
  const story = document.querySelector('.story'); // Find the existing screen-height stage.
  const runway = story?.closest('.story-runway'); // Find the normal-flow wrapper that limits the pin.
  const track = story?.querySelector('.story-track'); // Move the existing horizontal row within the clipped stage.
  if (!story || !runway || !track) return; // Leave pages without the Story markup working normally.
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)'); // Use the site's existing motion preference pattern.
  const desktop = window.matchMedia('(min-width: 901px) and (hover: hover) and (pointer: fine) and (not (any-pointer: coarse))'); // Match the CSS desktop enhancement conditions exactly.
  let horizontalEnabled = false; // Keep the default Story readable until desktop layout checks pass.
  let pinTop = 0; // Account for the navigation bar when converting the runway position into progress.
  let beatMetrics = []; // Cache untransformed beat slots so their own animation cannot change visibility measurements.
  let stageLeft = 0; // Store the clipped stage's left edge relative to the stationary track origin.
  let stageRight = 0; // Store the clipped stage's right edge in the same coordinate system.
  function updateBeatEntrances(distance) { // Use the rendered track position, including its easing, for every beat's entrance.
    beatMetrics.forEach(metric => { // Apply the same visibility rule from either direction.
      const left = metric.left - distance; // Locate this beat after the track's actual horizontal translation.
      const right = left + metric.width; // Use layout width rather than the beat's animated scale.
      const overlap = Math.max(0, Math.min(right, stageRight) - Math.max(left, stageLeft)); // Measure how much of the beat is inside the clipped stage.
      const entranceDistance = Math.max(1, Math.min(180, metric.width * 0.35, (stageRight - stageLeft) * 0.35)); // Complete the entrance near the edge so the text becomes readable promptly.
      const progress = !horizontalEnabled || preference.matches ? 1 : Math.min(1, overlap / entranceDistance); // Reveal from either side and show everything immediately for reduced motion.
      const eased = progress * progress * (3 - 2 * progress); // Soften the beginning and end without adding a second time-based animation.
      const value = Number(eased.toFixed(4)); // Avoid imperceptible updates while retaining a smooth fade.
      if (metric.value === value) return; // Skip writes for fully visible, fully hidden or unchanged beats.
      metric.value = value; // Remember the entrance state used for this beat.
      metric.element.style.setProperty('--beat-opacity', String(value)); // Fade the mascot and speech bubble together.
      metric.element.style.setProperty('--beat-lift', `${((1 - value) * 18).toFixed(3)}px`); // Raise the beat gently through an 18-pixel entrance.
      metric.element.style.setProperty('--beat-scale', String(0.96 + value * 0.04)); // Grow subtly from 96 percent to full size.
    }); // Finish the synchronized entrances without measuring animated rectangles.
  } // End the position-based per-beat effect.
  let pendingFrame = 0; // Batch resize notifications into a single measurement.
  let previousSize = ''; // Avoid repeated writes when the layout has not changed.
  let travelDistance = 0; // Share the measured overflow with the position updater.
  let positionFrame = 0; // Batch scroll events into one track update per frame.
  let previousDistance = null; // Store the rendered distance separately from the latest scroll target.
  let lastPositionTime = null; // Measure elapsed time so easing stays consistent across display refresh rates.
  let syncPosition = true; // Place the track correctly on initialization and after geometry changes.
  const maximumLag = 64; // Limit the added horizontal lag to 64 pixels during fast scrolling.
  const settleTolerance = 0.1; // Finish within a tenth of a pixel instead of running imperceptible frames forever.
  let lastScrollPosition = Math.max(0, window.scrollY); // Remember the actual page position, ignoring negative top-edge bounce.
  runway.dataset.scrollDirection = 'none'; // Expose the detected direction without adding any visual effect.
  function handleStoryScroll() { // Detect forward or reverse movement from actual scrolling, including keyboard and touch input.
    const currentScrollPosition = Math.max(0, window.scrollY); // Read the page position rather than guessing from wheel gestures.
    const delta = currentScrollPosition - lastScrollPosition; // Compare this position with the previous scroll event.
    lastScrollPosition = currentScrollPosition; // Always update the baseline, including outside the runway and at either boundary.
    if (delta !== 0 && !preference.matches && travelDistance > 0) { // Ignore stationary events and disabled motion.
      const direction = delta > 0 ? 'down' : 'up'; // Down advances left; up rewinds right.
      if (runway.dataset.scrollDirection !== direction) runway.dataset.scrollDirection = direction; // Record reversals only when the detected direction changes.
    } // Finish direction detection without resetting or accumulating horizontal distance.
    if (horizontalEnabled) scheduleStoryPosition(); // Leave mobile and reduced-motion scrolling free of Story animation work.
  } // End the passive scroll handler.
  function updateStoryPosition(time) { // Ease the rendered track toward the latest scroll-derived target.
    positionFrame = 0; // Allow another frame only if scrolling or unfinished easing needs it.
    if (!horizontalEnabled || !desktop.matches || preference.matches) { lastPositionTime = null; return; } // Never continue easing after a fallback preference becomes active.
    const elapsed = Math.max(0, time - (lastPositionTime ?? time)); // Read real elapsed milliseconds rather than assuming a fixed frame rate.
    lastPositionTime = time; // Keep the next easing step relative to this frame.
    const scrolled = pinTop - runway.getBoundingClientRect().top; // Measure vertical travel from where the stage reaches the bottom of the navigation bar.
    const target = preference.matches || travelDistance <= 0 ? 0 : Math.min(travelDistance, Math.max(0, scrolled)); // Keep the target inside the track's exact start and end.
    const shouldSync = syncPosition || previousDistance === null || preference.matches || target === 0 || target === travelDistance || elapsed > 120; // Align immediately at boundaries, after reflow or after a suspended frame.
    let distance = target; // Use an exact position whenever easing is inappropriate.
    if (!shouldSync) { // Smooth only ordinary travel within the pinned section.
      const responseTime = lenis ? 35 : 55; // Add less easing when Lenis is already smoothing the page scroll.
      const blend = 1 - Math.exp(-elapsed / responseTime); // Use time-based exponential easing without spring overshoot.
      distance = previousDistance + (target - previousDistance) * blend; // Move partway toward the latest target in either direction.
      const remaining = target - distance; // Measure the extra lag introduced by this easing step.
      if (Math.abs(remaining) > maximumLag) distance = target - Math.sign(remaining) * maximumLag; // Catch up promptly during rapid wheel input or large scroll jumps.
      if (Math.abs(target - distance) <= settleTolerance) distance = target; // Finish at the exact target when the remaining movement is invisible.
    } // End the short easing step.
    syncPosition = false; // Resume normal easing after this synchronized frame.
    distance = Math.min(travelDistance, Math.max(0, distance)); // Keep the rendered position within bounds as well as the target.
    if (distance !== previousDistance) { // Avoid redundant transform writes after the track has settled.
      previousDistance = distance; // Remember the rendered position for the next interpolation step.
      track.style.transform = `translateX(${-distance}px)`; // Move the track without adding a second CSS transition.
    } // End the frame's style update.
    updateBeatEntrances(distance); // Draw each beat's entrance in the same frame as the eased track movement.
    if (distance !== target) scheduleStoryPosition(); // Continue only for the brief catch-up after input stops.
    else lastPositionTime = null; // Stop the animation loop completely once the target is reached.
  } // End the bounded smoothing update.
  function scheduleStoryPosition() { // Share one pending animation frame between scrolling and easing.
    if (!horizontalEnabled || positionFrame) return; // Schedule only an active desktop story and share any pending animation frame.
    if (lastPositionTime === null) lastPositionTime = performance.now(); // Start a fresh timing interval when waking from rest.
    positionFrame = requestAnimationFrame(updateStoryPosition); // Request the next frame only while work is needed.
  } // End the track-position scheduler.
  function measureStoryRunway() { // Update the hold distance only when layout or preferences change.
    pendingFrame = 0; // Allow a later change to schedule another measurement.
    const beats = Array.from(track.children); // Read the six beats in their original accessible document order.
    const wantsHorizontal = desktop.matches && !preference.matches; // Use ordinary vertical scrolling for every fallback condition.
    story.classList.toggle('is-horizontal', wantsHorizontal); // Measure candidate desktop dimensions only when the device allows them.
    const fitsStage = wantsHorizontal && Math.max(0, ...beats.map(beat => beat.offsetHeight)) + 36 <= track.clientHeight; // Leave breathing room so a tall mascot or enlarged text cannot be clipped.
    horizontalEnabled = wantsHorizontal && fitsStage; // Enable horizontal scrolling only when the entire beat fits vertically.
    story.classList.toggle('is-horizontal', horizontalEnabled); // Restore natural height immediately if the fit check fails.
    story.classList.toggle('has-beat-entrances', horizontalEnabled); // Keep all fallback content plainly visible.
    if (!horizontalEnabled) { // Release every scroll-animation constraint in the vertical layout.
      if (positionFrame) cancelAnimationFrame(positionFrame); // Cancel any easing frame queued before the mode changed.
      positionFrame = 0; // Allow desktop mode to start a fresh frame later.
      lastPositionTime = null; // Do not carry elapsed animation time across layout modes.
      previousDistance = null; // Start from the correct position when desktop mode returns.
      syncPosition = true; // Avoid animating from stale desktop geometry.
      travelDistance = 0; // Remove the horizontal travel requirement entirely.
      beatMetrics = []; // Skip per-beat animation work while reading vertically.
      track.style.removeProperty('transform'); // Clear the actual inline translation as well as the CSS override.
      beats.forEach(beat => { ['--beat-opacity', '--beat-lift', '--beat-scale'].forEach(name => beat.style.removeProperty(name)); }); // Remove cached entrance effects from every beat.
      runway.classList.remove('is-pinned'); // Let the story and menu scroll in normal document flow.
      runway.style.removeProperty('--story-stage-height'); // Discard the old fixed stage height.
      runway.style.removeProperty('--story-travel'); // Discard the old artificial runway length.
      runway.dataset.scrollDirection = 'none'; // Clear direction metadata while no horizontal motion is active.
      if (previousSize !== 'vertical') { // Refresh other page measurements once per switch into the fallback.
        previousSize = 'vertical'; // Avoid repeated refreshes from resize observation.
        if (lenis) lenis.resize(); // Keep the existing page scroller's bounds accurate after releasing the pin.
        story.dispatchEvent(new Event('storylayoutchange', { bubbles: true })); // Notify the airplane route after the page height changes.
      } // End the one-time fallback refresh.
      return; // Skip all horizontal measurements and scheduling in the vertical layout.
    } // End fallback handling.
    pinTop = parseFloat(getComputedStyle(story).getPropertyValue('--header-height')) || 0; // Use the same sticky offset as CSS even before pinning starts.
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0; // Include the actual responsive space between beats.
    const totalWidth = beats.reduce((sum, beat) => sum + beat.offsetWidth, 0) + gap * Math.max(0, beats.length - 1); // Measure layout widths without counting reveal transforms.
    const visibleWidth = track.clientWidth; // Use the actual visible track window within the padded Story stage.
    stageLeft = -track.offsetLeft; // Include the stage's left padding in its true clipped viewing area.
    stageRight = story.clientWidth - track.offsetLeft; // Include the right padding while respecting the section's overflow boundary.
    beatMetrics = beats.map(beat => ({ element: beat, left: beat.offsetLeft, width: beat.offsetWidth, value: null })); // Refresh geometry only on layout changes, never from scaled beat bounds.
    story.classList.add('has-beat-entrances'); // Enable the scoped styles that replace the old one-time Story animation.
    const travel = preference.matches ? 0 : Math.max(0, Math.ceil(totalWidth - visibleWidth)); // Reserve one vertical pixel per pixel of horizontal overflow.
    const stageHeight = story.offsetHeight; // Include stage padding in the fixed viewport-height measurement.
    const signature = `${stageHeight}:${travel}:${pinTop}`; // Detect a real change before touching page layout.
    if (signature !== previousSize) syncPosition = true; // Realign immediately when resizing changes the runway instead of easing from stale geometry.
    travelDistance = travel; // Keep the scroll mapping aligned with the current runway length.
    if (travel === 0) runway.dataset.scrollDirection = 'none'; // Clear the direction when reduced motion or a fitting track disables travel.
    scheduleStoryPosition(); // Restore the correct position after resizing, loading or a motion-preference change.
    if (signature === previousSize) return; // Prevent unnecessary observer updates and smooth-scroll refreshes.
    previousSize = signature; // Remember the measurements used for this runway.
    runway.style.setProperty('--story-stage-height', `${stageHeight}px`); // Supply the visible stage height to CSS.
    runway.style.setProperty('--story-travel', `${travel}px`); // Keep the CSS pinning duration equal to the horizontal travel distance.
    runway.classList.toggle('is-pinned', travel > 0); // Enable pinning only when extra travel is needed and motion is allowed.
    if (lenis) lenis.resize(); // Refresh the existing smooth-scroll bounds after changing page height.
    story.dispatchEvent(new Event('storylayoutchange', { bubbles: true })); // Rebuild the airplane route from the final desktop geometry.
  } // Finish measuring the shared pinning and horizontal-travel distance.
  function scheduleStoryMeasurement() { // Combine multiple layout events into one pending frame.
    if (!pendingFrame) pendingFrame = requestAnimationFrame(measureStoryRunway); // Schedule work only when something changes.
  } // End the layout scheduler.
  window.addEventListener('scroll', handleStoryScroll, { passive: true }); // Follow actual page scrolling without replacing other listeners or intercepting gestures.
  window.addEventListener('pageshow', () => { // Restore a saved page position without animating across the story.
    syncPosition = true; // Align with the restored scroll position on the next frame.
    scheduleStoryMeasurement(); // Refresh the runway before drawing the restored position.
  }); // End page-restoration handling.
  window.addEventListener('resize', scheduleStoryMeasurement, { passive: true }); // Recalculate the runway when the viewport changes.
  window.addEventListener('load', scheduleStoryMeasurement, { once: true }); // Recheck after the initial assets finish loading.
  desktop.addEventListener('change', scheduleStoryMeasurement); // Re-evaluate width, hover and touch capability changes; ordinary resizing still checks content fit.
  story.addEventListener('load', scheduleStoryMeasurement, true); // Check the fit again when lazy-loaded mascot dimensions become available.
  preference.addEventListener('change', scheduleStoryMeasurement); // Remove or restore the runway when motion preferences change.
  if (document.fonts) document.fonts.ready.then(scheduleStoryMeasurement); // Recheck after the site's fonts finish loading.
  if ('ResizeObserver' in window) { // Follow size changes without adding another scroll listener.
    const observer = new ResizeObserver(scheduleStoryMeasurement); // Observe layout only, never scroll position.
    observer.observe(story); // Track changes to the viewport-height stage.
    observer.observe(track); // Track changes to the available viewing width.
    const content = document.getElementById('smooth-content'); // Find the page wrapper whose reflow can shift the Story start.
    if (content) observer.observe(content); // Recheck the current position when other sections change the page layout.
    Array.from(track.children).forEach(beat => observer.observe(beat)); // Track any changes to the fixed beat widths.
  } // End the layout observation setup.
  measureStoryRunway(); // Establish the runway before the airplane route is first measured.
})(); // End the isolated Story scroll controller.

// Build the responsive route consumed by the scroll animation below.
(() => { // Keep the flight-path variables separate from the existing website code.
  const host = document.getElementById('smooth-content'); // Use the existing full-page content wrapper.
  if (!host || document.getElementById('paper-flight-route')) return; // Avoid missing containers or duplicate overlays.
  const stops = [ // Describe the journey using actual sections and relative horizontal positions.
    ['#hero', 0.80, 0.76, 0.28, false], // Begin beside the hero heading, clear of the top navigation.
    ['#story', 0.18, 0.22, 0.48, true], // Curl on the story's left side.
    ['#menu', 0.82, 0.78, 0.40, false], // Sweep across toward the menu's right side.
    ['#gallery', 0.24, 0.25, 0.50, true], // Add a second swirl near the gallery.
    ['#pre-orders', 0.80, 0.76, 0.48, false], // Cross the page again through the pre-order section.
    ['#reviews', 0.20, 0.23, 0.50, true], // Add a final playful loop near the reviews.
    ['#faq', 0.83, 0.78, 0.48, false], // Return toward the right side beside the FAQ.
    ['#place-order', 0.18, 0.22, 0.52, false], // Sweep left through the order section.
    ['.site-footer', 0.72, 0.70, 0.68, false] // Finish inside the footer rather than beyond the document.
  ]; // Finish the route's section map.
  const layer = document.createElement('div'); // Create a decorative layer without changing the supplied HTML.
  layer.id = 'paper-flight-route'; // Provide a stable target for Part 3.
  layer.className = 'paper-flight-route'; // Apply the full-page overlay styles.
  layer.setAttribute('inert', ''); // Exclude every decorative descendant from focus and interaction.
  layer.setAttribute('aria-hidden', 'true'); // Keep purely decorative geometry out of the accessibility tree.
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); // Use native SVG for accurate curves.
  svg.setAttribute('focusable', 'false'); // Prevent keyboard focus on the decoration.
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path'); // Use one continuous path for the entire journey.
  path.id = 'paper-flight-path'; // Let Part 3 sample position and direction from this exact path.
  path.setAttribute('class', 'paper-flight-route__path'); // Keep dotted styling separate from the scroll-controlled reveal mask.
  svg.append(path); // Place the continuous path inside its SVG viewport.
  layer.append(svg); // Place the SVG inside the non-interactive overlay.
  host.append(layer); // Mount the overlay above the page's ordinary content.
  let pendingFrame = 0; // Combine multiple layout changes into a single update.
  let previousGeometry = ''; // Avoid rewriting identical geometry after unrelated size notifications.
  const number = value => Math.round(value * 100) / 100; // Keep generated path coordinates compact and readable.
  function rebuildFlightRoute() { // Recalculate the route from the current responsive page layout.
    pendingFrame = 0; // Allow later layout changes to schedule another update.
    const bounds = host.getBoundingClientRect(); // Measure everything relative to the same content origin.
    const width = host.clientWidth; // Exclude any browser scrollbar from the route width.
    if (width <= 0) return; // Wait if the content wrapper is temporarily hidden.
    const mobile = width < 768; // Match the CSS breakpoint for the narrow-screen design.
    const edge = Math.min(mobile ? 28 : 70, width * 0.12); // Reserve room near each edge for the later plane asset.
    const points = stops.flatMap(([selector, desktopX, mobileX, fractionY, loop]) => { // Resolve every available section into a waypoint.
      const section = host.querySelector(selector); // Find the corresponding section in the original page.
      if (!section) return []; // Gracefully skip a section if the owner removes it later.
      const rect = section.getBoundingClientRect(); // Read the section's current position and responsive height.
      if (rect.height <= 0) return []; // Skip sections that are currently hidden.
      if (selector === '.site-footer') { // Finish beside the footer's contact links instead of continuing through the footer.
        const links = Array.from(section.querySelectorAll('#footer-whatsapp-link, a[href*="instagram.com"]')); // Aim at the actual WhatsApp and Instagram labels.
        const labelRects = links.map(link => { // Measure text rather than the full width of a block-level link.
          const range = document.createRange(); // Use the browser's actual text layout for responsive accuracy.
          range.selectNodeContents(link); // Include the visible contact label.
          return range.getBoundingClientRect(); // Read its current position after fonts and layout are applied.
        }).filter(label => label.width > 0 && label.height > 0); // Ignore links that are not currently displayed.
        if (labelRects.length) { // Use the original footer waypoint only if contact labels are unavailable.
          const targetX = labelRects.reduce((sum, label) => sum + label.left + label.width / 2, 0) / labelRects.length - bounds.left; // Aim midway between the two label centers.
          const targetY = labelRects.reduce((sum, label) => sum + label.top + label.height / 2, 0) / labelRects.length - bounds.top; // Aim between WhatsApp and Instagram vertically.
          const x = Math.max(edge, Math.min(width - edge, targetX + (mobile ? 100 : 140))); // Park above and to the right of the links with room for the artwork.
          const y = Math.max(rect.top - bounds.top + 12, targetY - 130); // Stay near the footer's upper edge, or above the contact column when it stacks on mobile.
          return [{ x, y, height: rect.height, loop: false, targetX, targetY }]; // Let the final curve turn naturally toward the contact labels.
        } // End contact-aware endpoint selection.
      } // End the footer-specific route adjustment.
      const x = Math.max(edge, Math.min(width - edge, width * (mobile ? mobileX : desktopX))); // Keep waypoints inside safe horizontal limits.
      const sectionTop = section.closest('.story-runway')?.getBoundingClientRect().top ?? rect.top; // Keep the Story waypoint anchored to normal flow while its stage is sticky.
      const y = sectionTop - bounds.top + rect.height * fractionY; // Preserve the waypoint's stage-relative height without following the pin.
      return [{ x, y, height: rect.height, loop }]; // Retain the section height to size each swirl safely.
    }); // Complete the responsive waypoint list.
    if (points.length < 2) return; // A journey needs at least a start and an end.
    const footer = host.querySelector('.site-footer'); // Use the footer as the route surface's lower boundary.
    const height = Math.ceil(footer ? footer.getBoundingClientRect().bottom - bounds.top : host.clientHeight); // Avoid measuring the overlay as part of its own height.
    const signature = JSON.stringify([width, height, mobile, points]); // Detect real geometry changes including section expansion.
    if (signature === previousGeometry) return; // Skip redundant SVG updates when the layout is unchanged.
    previousGeometry = signature; // Remember the new layout for the next notification.
    const commands = [`M ${number(points[0].x)} ${number(points[0].y)}`]; // Start the route at the hero waypoint.
    const checkpoints = [{ y: points[0].y, length: 0 }]; // Match travel distance to each section instead of letting loops push the plane offscreen.
    let previous = points[0]; // Track the outgoing position for each connecting curve.
    points.slice(1).forEach((point, index) => { // Join every later section in document order.
      const gap = Math.max(0, point.y - previous.y); // Measure the space available before this waypoint.
      const following = points[index + 2]; // Look ahead so a loop stays clear of the next waypoint.
      const nextGap = following ? Math.max(0, following.y - point.y) : gap; // Limit swirl size between neighboring sections.
      const radius = point.loop ? Math.max(0, Math.min(mobile ? 30 : 90, width * 0.065, point.height * 0.18, gap * 0.22, nextGap * 0.22, (width - edge - point.x) / 2)) : 0; // Fit compact circular loops within both the page and their sections.
      const bend = gap * 0.45; // Give each crossing a smooth vertical entry and exit.
      let controlX = point.x, controlY = point.y - bend; // Keep the existing arrival tangent for ordinary section waypoints.
      if (Number.isFinite(point.targetX) && Number.isFinite(point.targetY)) { // Shape only the final arrival toward the contact links.
        const dx = point.targetX - point.x, dy = point.targetY - point.y; // Find the direction from the stopping point toward both labels.
        const aimLength = Math.max(1, Math.hypot(dx, dy)); // Normalize the desired nose direction safely.
        const handle = Math.min(120, Math.max(32, gap * 0.25)); // Give the final turn enough room without adding another loop.
        controlX = point.x - dx / aimLength * handle; // Approach from the opposite side so the final tangent points at the links.
        controlY = point.y - dy / aimLength * handle; // Turn gradually into the final heading instead of rotating abruptly after stopping.
      } // End the contact-facing arrival tangent.
      commands.push(`C ${number(previous.x)} ${number(previous.y + bend)} ${number(controlX)} ${number(controlY)} ${number(point.x)} ${number(point.y)}`); // Sweep to each waypoint with the contact-facing final turn.
      if (radius > 4) { // Draw a swirl only when the current layout has enough room.
        const x = point.x, y = point.y, r = radius, k = r * 0.55228475; // Use the standard four-cubic approximation of a circle.
        commands.push(`C ${number(x)} ${number(y + k)} ${number(x + r - k)} ${number(y + r)} ${number(x + r)} ${number(y + r)}`); // Turn downward and around the lower-left quarter.
        commands.push(`C ${number(x + r + k)} ${number(y + r)} ${number(x + 2 * r)} ${number(y + k)} ${number(x + 2 * r)} ${number(y)}`); // Round the lower-right quarter of the loop.
        commands.push(`C ${number(x + 2 * r)} ${number(y - k)} ${number(x + r + k)} ${number(y - r)} ${number(x + r)} ${number(y - r)}`); // Curl upward around the upper-right quarter.
        commands.push(`C ${number(x + r - k)} ${number(y - r)} ${number(x)} ${number(y - k)} ${number(x)} ${number(y)}`); // Finish the swirl with the same downward tangent as the next curve.
      } // Finish the optional loop.
      path.setAttribute('d', commands.join(' ')); // Measure the completed route through this section.
      checkpoints.push({ y: point.y, length: path.getTotalLength() }); // Remember where the section ends along the curved journey.
      previous = point; // Continue the journey from this section's waypoint.
    }); // Finish all continuous curves and swirls.
    layer.style.height = `${height}px`; // Cover the page only through its footer.
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`); // Keep path units equal to layout pixels.
    path.setAttribute('d', commands.join(' ')); // Update the one authoritative path for rendering and future motion.
    layer.flightCheckpoints = checkpoints; // Share section distances with the scroll controller.
    layer.dataset.layout = mobile ? 'mobile' : 'desktop'; // Expose the selected route for later integration.
    layer.dispatchEvent(new CustomEvent('flightpathchange', { bubbles: true })); // Notify Part 3 when resize or content changes require new measurements.
  } // Finish the route builder.
  function scheduleFlightRoute() { // Schedule work only after layout changes, never on every scroll.
    if (!pendingFrame) pendingFrame = requestAnimationFrame(rebuildFlightRoute); // Batch synchronous layout notifications into one frame.
  } // Finish the layout scheduler.
  window.addEventListener('resize', scheduleFlightRoute, { passive: true }); // Rebuild after viewport width or orientation changes.
  window.addEventListener('load', scheduleFlightRoute, { once: true }); // Account for initially loaded image dimensions.
  host.addEventListener('storylayoutchange', scheduleFlightRoute); // Follow Story's desktop/vertical mode changes without adding a scroll handler.
  host.addEventListener('load', scheduleFlightRoute, true); // Account for lazy-loaded images later in the page.
  if (document.fonts) document.fonts.ready.then(scheduleFlightRoute); // Rebuild after web fonts change text wrapping.
  if ('ResizeObserver' in window) { // Watch section heights when the browser supports layout observation.
    const observer = new ResizeObserver(scheduleFlightRoute); // Catch menu filters, FAQ expansion and responsive reflow.
    observer.observe(host); // Observe the overall page width and normal-flow height.
    stops.forEach(([selector]) => { const section = host.querySelector(selector); if (section) observer.observe(section); }); // Also watch sections whose resizing shifts later route anchors.
  } // Finish automatic layout observation.
  rebuildFlightRoute(); // Prepare the route before attaching scroll-driven motion.
})(); // Finish the isolated flight-path setup.

// Part 3: drive airplane position, heading and trail reveal from the current scroll position.
(() => { // Isolate the scroll controller from the existing menu, cart and product viewer.
  const layer = document.getElementById('paper-flight-route'); // Reuse the route constructed above.
  const path = document.getElementById('paper-flight-path'); // Read position and tangent from the same visible SVG path.
  if (!layer || !path) return; // Leave the original website usable if the route is unavailable.
  const svg = path.ownerSVGElement; // Attach the reveal mask to the existing SVG.
  const namespace = 'http://www.w3.org/2000/svg'; // Use the SVG namespace for mask elements.
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)'); // Honor the visitor's motion preference.
  const clamp = (value, minimum, maximum) => Math.min(maximum, Math.max(minimum, value)); // Keep scroll progress within valid bounds.
  layer.classList.add('is-scroll-driven'); // Hide the static Part 2 preview while preparing the mask.
  const definitions = document.createElementNS(namespace, 'defs'); // Store the non-visible mask definition.
  const mask = document.createElementNS(namespace, 'mask'); // Reveal only the traveled portion of the dotted line.
  mask.id = 'paper-flight-reveal'; // Give the route a stable local mask reference.
  mask.setAttribute('maskUnits', 'userSpaceOnUse'); // Keep the mask aligned with full-page SVG coordinates.
  mask.setAttribute('maskContentUnits', 'userSpaceOnUse'); // Measure the reveal stroke in the same units as the route.
  mask.setAttribute('x', '0'); // Begin the mask at the left page edge.
  mask.setAttribute('y', '0'); // Begin the mask at the top page edge.
  const reveal = document.createElementNS(namespace, 'path'); // Trace the route with one progressively longer white stroke.
  reveal.setAttribute('fill', 'none'); // Reveal only the route line rather than its enclosed area.
  reveal.setAttribute('stroke', 'white'); // White makes the corresponding dotted trail visible.
  reveal.setAttribute('stroke-width', '6'); // Fully cover the dots and their antialiased edges.
  reveal.setAttribute('stroke-linecap', 'butt'); // End the revealed trail precisely at the traveled distance.
  mask.append(reveal); // Put the reveal stroke inside the mask.
  definitions.append(mask); // Store the mask in the SVG definitions.
  svg.prepend(definitions); // Make the mask available before the visible path.
  path.setAttribute('mask', 'url(#paper-flight-reveal)'); // Preserve the dotted pattern while masking its unfinished portion.
  const plane = document.createElement('img'); // Use the transparent artwork prepared in Part 1.
  plane.className = 'paper-flight-plane'; // Apply responsive sizing and non-interactive positioning.
  plane.alt = ''; // Treat the airplane as decorative rather than useful content.
  plane.draggable = false; // Prevent a drag gesture from interrupting scrolling.
  plane.decoding = 'async'; // Decode the small asset without blocking page rendering.
  layer.append(plane); // Place the airplane above the SVG trail in the same overlay.
  let totalLength = 0; // Cache the measured route length between geometry changes.
  let scrollStops = []; // Map section scroll positions to distances along the route.
  let pendingFrame = 0; // Allow at most one pending animation frame per scroll update.
  function drawFlight() { // Draw a single frame at the current actual scroll position.
    pendingFrame = 0; // Permit the next scroll event to request another frame.
    if (preference.matches || totalLength <= 0 || scrollStops.length < 2) return; // Skip unnecessary work for reduced motion or incomplete geometry.
    const scroll = clamp(window.scrollY, 0, scrollStops[scrollStops.length - 1].scroll); // Clamp overscroll at both ends of the page.
    let nextIndex = 1; // Begin with the hero-to-story interval.
    while (nextIndex < scrollStops.length - 1 && scroll > scrollStops[nextIndex].scroll) nextIndex += 1; // Find the current section interval without assuming monotonic scrolling.
    const start = scrollStops[nextIndex - 1], end = scrollStops[nextIndex]; // Read the surrounding section checkpoints.
    const progress = clamp((scroll - start.scroll) / Math.max(1, end.scroll - start.scroll), 0, 1); // Convert this section's scroll range into local progress.
    const distance = clamp(start.length + (end.length - start.length) * progress, 0, totalLength); // Advance or rewind the plane along the curve.
    const position = path.getPointAtLength(distance); // Sample the airplane's exact route position.
    const before = path.getPointAtLength(Math.max(0, distance - 1)); // Sample just behind the current position.
    const after = path.getPointAtLength(Math.min(totalLength, distance + 1)); // Sample just ahead to find the natural heading.
    const angle = Math.atan2(after.y - before.y, after.x - before.x) * 180 / Math.PI + 57.5; // Correct for the artwork's original up-right nose direction.
    plane.style.transform = `translate(${position.x}px, ${position.y}px) rotate(${angle}deg) translate(-40%, -93.5%)`; // Anchor the artwork's tail to the route and turn its nose along the tangent.
    reveal.setAttribute('stroke-dasharray', `${distance} ${totalLength + 1}`); // Reveal the traveled length without changing the underlying dotted pattern.
    reveal.setAttribute('visibility', distance > 0 ? 'visible' : 'hidden'); // Avoid an initial dot or mask artifact when progress is zero.
    layer.classList.add('is-flight-ready'); // Show the accurately positioned plane and its revealed trail.
  } // Finish one scroll-driven frame without scheduling a continuous animation loop.
  function scheduleFlight() { // Batch native and smooth-scroll notifications into one frame.
    if (!pendingFrame && !preference.matches) pendingFrame = requestAnimationFrame(drawFlight); // Request a frame only when an event changes the visible state.
  } // Finish the event-driven frame scheduler.
  function refreshFlight() { // Refresh measurements after the route or viewport changes.
    totalLength = path.getTotalLength(); // Measure only when geometry changes rather than on every scroll.
    reveal.setAttribute('d', path.getAttribute('d')); // Keep the mask on the updated desktop or mobile route.
    mask.setAttribute('width', svg.viewBox.baseVal.width); // Cover the complete current page width.
    mask.setAttribute('height', svg.viewBox.baseVal.height); // Cover the complete current route height.
    const mobile = layer.dataset.layout === 'mobile'; // Use the same layout choice as the route builder.
    const source = mobile ? 'airplane-assets/paper-airplane-mobile.png' : 'airplane-assets/paper-airplane-desktop.png'; // Select the correctly sized local transparent asset.
    if (plane.getAttribute('src') !== source) plane.setAttribute('src', source); // Avoid reloading the image on ordinary geometry updates.
    const maximumScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight); // Use the browser's actual scrollable range.
    const origin = layer.getBoundingClientRect().top + window.scrollY; // Convert route coordinates to document coordinates.
    const checkpoints = layer.flightCheckpoints || []; // Read the section distances prepared by the route builder.
    const finalCheckpoint = checkpoints[checkpoints.length - 1]; // Find the parked position beside the footer links.
    const finishScroll = finalCheckpoint ? clamp(origin + finalCheckpoint.y - window.innerHeight * 0.72, 0, maximumScroll) : maximumScroll; // Finish once the stopping point is comfortably visible instead of flying farther into the footer.
    scrollStops = [{ scroll: 0, length: 0 }]; // Start the airplane at the hero when the page is at the top.
    checkpoints.slice(1, -1).forEach(checkpoint => { // Align each intermediate section with the middle of the viewport.
      const scroll = clamp(origin + checkpoint.y - window.innerHeight * 0.5, 0, finishScroll); // Keep intermediate progress within the shortened journey.
      if (scroll > scrollStops[scrollStops.length - 1].scroll && scroll < finishScroll) scrollStops.push({ scroll, length: checkpoint.length }); // Skip collapsed intervals to avoid division by zero or backward progress.
    }); // Finish the intermediate scroll map.
    scrollStops.push({ scroll: finishScroll, length: totalLength }); // Stay parked at the contact-facing endpoint as the visitor scrolls farther down.
    scheduleFlight(); // Restore the correct plane and trail position after resizing or reflow.
  } // Finish updating cached measurements.
  layer.addEventListener('flightpathchange', refreshFlight); // Follow responsive route rebuilds and expanding sections.
  window.addEventListener('scroll', scheduleFlight, { passive: true }); // Follow native scrolling, Lenis scrolling, keyboard navigation and touch gestures.
  window.addEventListener('resize', refreshFlight, { passive: true }); // Recalculate the scroll range even when only viewport height changes.
  window.addEventListener('pageshow', refreshFlight); // Restore the correct position after back-forward navigation.
  preference.addEventListener('change', () => { // Respond immediately if the visitor changes motion preferences.
    if (pendingFrame) cancelAnimationFrame(pendingFrame); // Cancel a queued animation frame when the preference changes.
    pendingFrame = 0; // Reset the scheduler so motion can resume if requested later.
    refreshFlight(); // Synchronize the current position when motion becomes available again.
  }); // Finish the motion-preference listener.
  refreshFlight(); // Initialize from the current scroll position, including a restored or anchor-linked page.
})(); // Finish the scroll-driven airplane and trail controller.

// Customer reviews: load shared records and create the same taped cards from safe text nodes.
(() => { // Isolate reviews from the Story, cart and airplane controllers.
  const form = document.getElementById('customer-review-form'); // Find the new customer form.
  const track = document.getElementById('customer-reviews-track'); // Reuse the existing review-card row.
  if (!form || !track) return; // Skip pages without this feature.
  const open = document.getElementById('review-open'), cancel = document.getElementById('review-cancel'); // Keep form controls together.
  const status = document.getElementById('reviews-status'), submitStatus = document.getElementById('review-submit-status'); // Separate list feedback from submission feedback.
  const retry = document.getElementById('reviews-retry'), more = document.getElementById('reviews-more'); // Support recovery and older-review pagination.
  const hint = document.getElementById('customer-reviews-hint'), submit = document.getElementById('review-submit'); // Update the list hint and posting button.
  const endpoint = '/api/reviews'; // Send both reads and writes to the shared Netlify function.
  const seen = new Set(); // Prevent duplicate cards after retries or overlapping list responses.
  let next = null, loading = false, posting = false, submissionId = null; // Track independent list and submission requests.
  function createCard(review) { // Build the existing design without interpreting customer text as HTML.
    if (seen.has(review.id)) return null; // Keep one card per stored submission.
    const card = document.createElement('article'); // Use a semantic review card.
    card.className = 'review-card is-visible'; // Reuse the paper, tape, spacing and alternating rotation styles.
    const tape = document.createElement('span'); // Add the original decorative tape.
    tape.className = 'review-tape'; tape.setAttribute('aria-hidden', 'true'); // Keep the tape out of screen-reader output.
    const stars = document.createElement('div'); // Show the customer's actual selected rating.
    stars.className = 'review-stars'; stars.setAttribute('role', 'img'); stars.setAttribute('aria-label', `${review.rating} out of 5 stars`); // Give stars a readable accessible label.
    stars.textContent = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating); // Distinguish filled and unfilled stars visually.
    const quote = document.createElement('p'); quote.className = 'review-quote'; quote.textContent = `“${review.message}”`; // Treat review text strictly as plain text.
    const meta = document.createElement('div'); meta.className = 'review-meta'; // Preserve the original reviewer footer.
    const name = document.createElement('span'); name.className = 'review-name'; name.textContent = review.name; // Display the public name without markup injection.
    const item = document.createElement('span'); item.className = 'review-item'; item.textContent = review.item; // Display what the customer ordered.
    meta.append(name, item); card.append(tape, stars, quote, meta); // Assemble the same card structure as the reference.
    seen.add(review.id); // Remember the successfully rendered record.
    return card; // Let the caller choose newest-first insertion or older-page append.
  } // End safe review rendering.
  async function request(url, options = {}) { // Request the deployed review service and distinguish a missing deployment from network errors.
    if (!['http:', 'https:'].includes(window.location.protocol)) throw new Error('Open the deployed website to read or post reviews. Reviews cannot connect from a downloaded HTML file.'); // Never fetch a relative API URL from file://.
    const controller = new AbortController(); // Keep slow requests from leaving the form stuck.
    const timer = setTimeout(() => controller.abort(), 15000); // Allow a safe retry after a connection timeout.
    try { // Keep actual storage and HTTP failures visible instead of pretending reviews were saved.
      let response; // Separate connection failures from errors returned by the server.
      try { response = await fetch(new URL(url, window.location.origin), { ...options, signal: controller.signal, cache: 'no-store', credentials: 'same-origin', headers: { Accept: 'application/json', ...options.headers } }); } // Use the same deployed site's public API route.
      catch (error) { // Translate raw browser network errors into a recoverable message.
        if (error.name === 'AbortError') throw error; // Preserve the timeout message used by the form.
        throw new Error('Unable to connect to reviews. Check your connection and try again.'); // Do not expose a vague Failed to fetch message.
      } // End connection handling.
      if (response.status === 404 || response.status === 405) throw new Error('The review service has not been deployed yet. Please try again later.'); // A static upload cannot deploy the required server function.
      if (response.status === 429) throw new Error('Please wait a minute before trying again.'); // Handle platform rate limiting even when its response is not JSON.
      if (!response.headers.get('content-type')?.includes('application/json')) throw new Error('The review service is unavailable. Please try again later.'); // Detect a static HTML fallback instead of parsing it as review data.
      const data = await response.json(); // Parse only an actual JSON response from the function.
      if (!response.ok) throw new Error(data.error || 'Reviews are temporarily unavailable. Please try again shortly.'); // Preserve useful server-side validation errors.
      return data; // Return only a confirmed successful response.
    } finally { clearTimeout(timer); } // Clean up the request timer after every outcome.
  } // End the review request helper.
  function updateList() { // Match visible UI to the real number of rendered cards.
    track.hidden = seen.size === 0; hint.hidden = seen.size < 2; // Hide an empty card row and unnecessary swipe hint.
    more.hidden = !next; // Offer older reviews only when the server has another page.
  } // End list visibility updates.
  async function loadReviews() { // Load the initial page, an older page or a retry without destroying existing cards.
    if (loading) return; // Avoid duplicate simultaneous page requests.
    loading = true; retry.hidden = true; more.disabled = true; // Show one loading state at a time.
    status.textContent = seen.size ? 'Loading more reviews…' : 'Loading customer reviews…'; // Distinguish initial loading from pagination.
    try { // Keep existing reviews visible during network failures.
      const data = await request(endpoint + (next ? `?after=${encodeURIComponent(next)}` : '')); // Request the next stable page of saved reviews.
      data.reviews.forEach(review => { const card = createCard(review); if (card) track.append(card); }); // Append real cards while skipping already-shown submissions.
      next = data.next; // Retain the server's next-page cursor.
      status.textContent = seen.size ? '' : 'No reviews yet. Tried our treats? Be the first to share your thoughts.'; // Use an honest empty state instead of sample testimonials.
    } catch (error) { status.textContent = error.name === 'AbortError' ? 'Reviews took too long to load. Please try again.' : error.message; retry.hidden = false; } // Keep errors recoverable.
    finally { loading = false; more.disabled = false; updateList(); } // Restore list controls after every outcome.
  } // End review loading.
  open.addEventListener('click', () => { // Open or close the form with a real button.
    if (posting) return; // Preserve a submission that is currently saving.
    form.hidden = !form.hidden; open.setAttribute('aria-expanded', String(!form.hidden)); // Keep the expanded state accurate for assistive technology.
    if (!form.hidden) document.getElementById('review-name').focus(); // Place keyboard users at the first field.
  }); // End the form toggle.
  cancel.addEventListener('click', () => { form.hidden = true; open.setAttribute('aria-expanded', 'false'); open.focus(); }); // Close without deleting the customer's unfinished text.
  form.addEventListener('input', () => { if (!posting) submissionId = null; }); // Give edited content a fresh submission ID while keeping identical retries safe.
  retry.addEventListener('click', loadReviews); more.addEventListener('click', loadReviews); // Wire retry and pagination controls.
  form.addEventListener('submit', async event => { // Save the review without a page reload.
    event.preventDefault(); // Keep the customer beside the review section.
    if (posting || !form.reportValidity()) return; // Require accessible browser validation and block double-click posts.
    const fields = new FormData(form); // Read values before temporarily disabling the form.
    submissionId ||= crypto.randomUUID(); // Reuse this ID if a saved response is lost and the customer retries.
    const payload = { id: submissionId, name: fields.get('name'), item: fields.get('item'), rating: Number(fields.get('rating')), message: fields.get('message'), website: fields.get('website') }; // Send only the public review fields and the bot trap.
    posting = true; Array.from(form.elements).forEach(control => { control.disabled = true; }); // Freeze the submitted values while saving.
    submit.textContent = 'Posting…'; submitStatus.textContent = 'Saving your review…'; // Announce the in-progress request.
    try { // Show success only after shared storage confirms the write.
      const data = await request(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }); // Persist the review for every visitor.
      const card = createCard(data.review); if (card) track.prepend(card); // Display the new review first in the same taped-card style.
      updateList(); status.textContent = ''; // Replace the empty message with the real card row.
      form.reset(); submissionId = null; form.hidden = true; open.setAttribute('aria-expanded', 'false'); // Prepare a clean form after successful storage.
      submitStatus.textContent = 'Thank you! Your review is now published.'; open.focus({ preventScroll: true }); // Announce publication and restore keyboard focus.
      track.scrollTo({ left: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }); // Bring the new card into view without forcing vertical page movement.
    } catch (error) { submitStatus.textContent = error.name === 'AbortError' ? 'The connection timed out. Your text is still here—please try again.' : error.message; } // Preserve the text and submission ID for a safe retry.
    finally { posting = false; Array.from(form.elements).forEach(control => { control.disabled = false; }); submit.textContent = 'Post review'; } // Restore the form after both success and failure.
  }); // End customer submissions.
  loadReviews(); // Load real shared reviews when the page opens.
})(); // End the customer review feature.
