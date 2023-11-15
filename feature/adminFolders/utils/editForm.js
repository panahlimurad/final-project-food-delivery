import { nanoid } from "nanoid";





export const EditFORM = {
  PRODUCTS: {
    title: "Edit product",
    infoImg: "Upload your product image",
    description:"Edit your Product description and necessary information",
    buttonTitle:"Edit Product",
    initialValues: {
      name: "",
      description: "",
      price: "",
      img_url: "",
      
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
        name: "description",
        type: "textarea",
      },
      {
        id: nanoid(),
        label: "Price",
        name: "price",
        type: "text",
      },
      {
        id: nanoid(),
        label: "Restaurants",
        name: "rest_id",
        type: "select",
      },
    ],
  },
  RESTAURANT: {
    title: "Edit restaurant",
    infoImg: "Upload your restaurant image",
    description:"Edit your restuarants information",
    buttonTitle:"Edit Restaruant",
    initialValues: {
      name: "",
      cuisine: "",
      category_id: "",
      delivery_price: "",
      delivery_min: "",
      address: "",
      slug: "",
      img_url: "",
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
        type: "text",
      },
      {
        id: nanoid(),
        label: "Delivery min",
        name: "delivery_min",
        type: "text",
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
        name: "category_id",
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
    title: "Edit category",
    infoImg: "Upload your category image",
    description:"Edit your category information",
    buttonTitle:"Edit Category",
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
    title: "Edit offer",
    infoImg: "Upload your offer image",
    description:"Edit your offer information",
    buttonTitle:"Edit Offer",
    initialValues: {
      name: "",
      description: "",
    },
    inputs: [
      {
        id: nanoid(),
        label: "Title",
        name: "name",
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
