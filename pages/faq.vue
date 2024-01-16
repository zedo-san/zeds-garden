<script setup>
const items = [
  {
    label: "How can I place an order?",
    defaultOpen: true,
    content:
      "To place an order, simply browse our online store, add the desired items to your cart, and proceed to checkout. Follow the instructions to enter your shipping address, payment details, and complete the purchase.",
  },
  {
    label: "What payment methods do you accept?",
    content:
      "We accept various payment methods, including credit/debit cards, PayPal, and other secure payment gateways. You can select your preferred payment option during the checkout process.",
  },
  {
    label: "Is it safe to shop on your website?",
    content:
      "Yes, shopping on our website is safe and secure. We use industry-standard encryption and security measures to protect your personal and payment information. Your privacy and security are our top priorities.",
  },
  {
    label: "How can I track my order?",
    content:
      "Once your order has been shipped, you will receive a confirmation email with a tracking number. You can use this tracking number to monitor the status and location of your package as it makes its way to you.",
  },
  {
    label: "What is your return policy?",
    content:
      "We have a hassle-free return policy. If you're not satisfied with your purchase, you can return the item within [number of days] days of receiving it. Please review our detailed return policy for more information on the process and eligibility.",
  },
  {
    label: "Do you offer international shipping?",
    content:
      "Yes, we offer international shipping to many countries. During the checkout process, you can select your country, and the shipping cost will be calculated based on your location.",
  },
  {
    label: "How can I contact customer support?",
    content:
      "If you have any labels or concerns, our customer support team is here to help. You can reach us through our [Contact Us] page, where you'll find options for email, live chat, or phone support. We strive to respond promptly to assist you.",
  },
];

// You can use the `onlineStoreFAQs` array in your JavaScript code as needed.
// For example, you can loop through the items to dynamically gener
</script>

<template>
  <GeneralContainer>
    <h2 class="font-bold text-3xl mb-8">Frequently Asked labels (FAQs)</h2>
    <UAccordion :items="items" size="xl" multiple />
  </GeneralContainer>
</template>
