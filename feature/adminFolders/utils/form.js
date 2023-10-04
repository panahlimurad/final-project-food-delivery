import { nanoid } from "nanoid";

export const FORM = {
  PRODUCTS: {
    title: "Add product",
    infoImg: "Upload your product image",
    description:"Add your Product description and necessary information",
    buttonTitle:"Create Product",
    initialValues: {
      name: "",
      desc: "",
      price: "",
      restaurant: "",
    },
    inputs: [
      {
        id: nanoid(),
        label: "Name",
        name: "name",
        type: "text",
      },
      {
        id: nanoid(),
        label: "Description",
        name: "desc",
        type: "textarea",
      },
      {
        id: nanoid(),
        label: "Price",
        name: "price",
        type: "number",
      },
      {
        id: nanoid(),
        label: "Restaurants",
        name: "restaurants",
        type: "select",
      },
    ],
  },
  RESTAURANT: {
    title: "Add restaurant",
    infoImg: "Upload your restaurant image",
    description:"Add your restuarants information",
    buttonTitle:"Create Restaruant",
    initialValues: {
      name: "",
      cuisine: "",
      delivery_price: "",
      delivery_minute: "",
      address: "",
      category: "",
      slug: "",
    },
    inputs: [
      {
        id: nanoid(),
        label: "Name",
        name: "name",
        type: "text",
      },
      {
        id: nanoid(),
        label: "Cuisine",
        name: "cuisine",
        type: "textarea",
      },
      {
        id: nanoid(),
        label: "Delivery price $",
        name: "delivery_price",
        type: "number",
      },
      {
        id: nanoid(),
        label: "Delivery min",
        name: "delivery_minute",
        type: "number",
      },
      {
        id: nanoid(),
        label: "Address",
        name: "address",
        type: "text",
      },
      {
        id: nanoid(),
        label: "Category",
        name: "category",
        type: "select",
      },
      {
        id: nanoid(),
        label: "Slug",
        name: "slug",
        type: "text",
      },
    ],
  },
  CATEGORY: {
    title: "Add category",
    infoImg: "Upload your category image",
    description:"Add your category information",
    buttonTitle:"Create Category",
    initialValues: {
      name: "",
      slug: "",
    },
    inputs: [
      {
        id: nanoid(),
        label: "Name",
        name: "name",
        type: "text",
      },
      {
        id: nanoid(),
        label: "Slug",
        name: "slug",
        type: "text",
      },
    ],
  },
  OFFER: {
    title: "Add offer",
    infoImg: "Upload your offer image",
    description:"Add your offer information",
    buttonTitle:"Create Offer",
    initialValues: {
      title: "",
      description: "",
    },
    inputs: [
      {
        id: nanoid(),
        label: "Title",
        name: "title",
        type: "text",
      },
      {
        id: nanoid(),
        label: "Description",
        name: "description",
        type: "textarea",
      },
    ],
  },
};
