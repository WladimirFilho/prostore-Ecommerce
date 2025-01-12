# E-Commerce Full-Stack Course Project

Welcome to the comprehensive guide to building a full-stack e-commerce application with modern tools and technologies. This project covers everything from setting up the environment to deploying the final application, all while utilizing best practices in design, development, and deployment.

---

## Table of Contents

- [Introduction](#introduction)
- [The Stack](#the-stack)
- [The Project Overview](#the-project-overview)
- [Environment Setup](#environment-setup)
- [Project Sections](#project-sections)
  - [App Creation & Layout](#app-creation--layout)
  - [Database, Prisma & Product Display](#database-prisma--product-display)
  - [Authentication with NextAuth](#authentication-with-nextauth)
  - [Add to Cart](#add-to-cart)
  - [Checkout Steps](#checkout-steps)
  - [PayPal Payments](#paypal-payments)
  - [Order History & User Profile](#order-history--user-profile)
  - [Admin Overview & Orders](#admin-overview--orders)
  - [Admin Products & Image Uploads](#admin-products--image-uploads)
  - [Search Filtering, Drawer & Carousel](#search-filtering-drawer--carousel)
  - [Ratings & Reviews](#ratings--reviews)
  - [Stripe Payments](#stripe-payments)
  - [Email Purchase Receipts](#email-purchase-receipts)
  - [Homepage Components & Wrap Up](#homepage-components--wrap-up)
- [Final Notes & Fixes](#final-notes--fixes)

---

## Introduction

This project is a full-stack e-commerce platform built with cutting-edge tools like Next.js, Prisma, PostgreSQL, and more. It demonstrates how to:

- Build scalable and maintainable applications.
- Implement secure authentication with NextAuth.
- Integrate payment gateways like PayPal and Stripe.
- Design dynamic, responsive, and feature-rich user interfaces.
- Manage databases effectively using Prisma ORM.

---

## The Stack

This project uses the following technologies:

- **Frontend**: Next.js, ShadCN UI
- **Backend**: Node.js, Prisma, NextAuth
- **Database**: PostgreSQL
- **Payment Integrations**: PayPal, Stripe
- **Deployment**: Vercel
- **Testing**: Jest

---

## The Project Overview

This is a step-by-step project designed to teach you how to create a production-ready e-commerce platform. Each section focuses on a specific feature or functionality, ensuring a clear understanding of how the pieces come together.

---

## Environment Setup

Before diving into the project, ensure you have the following installed:

- Node.js >= 16.x
- PostgreSQL
- A Vercel account for deployment
- Stripe and PayPal accounts for payment integration
- Resend API for email notifications

---

## Project Sections

### App Creation & Layout

- Setting up the project with `create-next-app`.
- Configuring assets, ShadCN UI, and themes.
- Building reusable components like `Header`, `Footer`, and `Theme Mode Toggle`.

### Database, Prisma & Product Display

- PostgreSQL setup and Prisma configuration.
- Creating models and migrations for products and users.
- Fetching and displaying products dynamically.

### Authentication with NextAuth

- Setting up user authentication with NextAuth.
- Handling sign-up, sign-in, and token customization.
- Protecting routes and managing user sessions.

### Add to Cart

- Building a robust cart feature with Zod schemas and Prisma models.
- Adding, updating, and removing items dynamically.
- Managing UI updates with React’s `useTransition` hook.

### Checkout Steps

- Building a multi-step checkout process.
- Handling shipping address, payment methods, and order placements.

### PayPal Payments

- Configuring PayPal sandbox and generating tokens.
- Implementing PayPal button integration for seamless payments.

### Order History & User Profile

- Viewing past orders and updating user profiles.
- Paginating order data for better performance.

### Admin Overview & Orders

- Creating admin dashboards for order and sales summaries.
- Managing order statuses, including cancelations and updates.

### Admin Products & Image Uploads

- Adding, updating, and deleting products.
- Implementing image uploads with Uploadthing.

### Search Filtering, Drawer & Carousel

- Implementing advanced search features with category filters and carousels.
- Adding sorting and rating filters for a better user experience.

### Ratings & Reviews

- Adding product reviews with Prisma schemas and Zod validation.
- Managing review creation, updates, and real-time UI updates.

### Stripe Payments

- Integrating Stripe for secure payments.
- Configuring payment intents and success pages.
- Setting up webhooks to handle payment updates.

### Email Purchase Receipts

- Sending transactional emails using Resend API.
- Customizing email templates and previewing them in development.

### Homepage Components & Wrap Up

- Adding interactive homepage components like deal countdowns and icon boxes.
- Wrapping up the project with final deployment and fixes.

---

## Final Notes & Fixes

- Addressing ESLint errors and warnings during development.
- Managing Vercel Hobby Plan limitations for small-scale deployments.

---

## Premium Documentation

This project also includes access to premium documentation for detailed explanations of advanced concepts and configurations.

---

## Final Code & Demo

[View Live Demo](#) | [Access Final Code](#)

---

Thank you for exploring this project! 🎉 Feel free to contribute or reach out for support.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
