export const doc: apiList[] = [
  [
    {
      name: "MyTokenObtainPairView",
      method: "post",
      params: [
        {
          name: "email",
          type: "string",
          required: true,
          description: "User email",
        },
        {
          name: "password",
          type: "string",
          required: true,
          description: "User password",
        },
      ],
      description: "Obtain JWT token pair for authentication",
    },
    {
      name: "Protection",
      method: "get",
      params: [],
      description: "Check if the token is valid",
    },
    {
      name: "UserViewSet",
      method: "post",
      params: [
        {
          name: "email",
          type: "string",
          required: true,
          description: "User email",
        },
        {
          name: "name",
          type: "string",
          required: true,
          description: "User name",
        },
        {
          name: "password",
          type: "string",
          required: true,
          description: "User password",
        },
      ],
      description: "Create a new user",
    },
    {
      name: "PasswordRecoverList",
      method: "post",
      params: [
        {
          name: "email",
          type: "string",
          required: true,
          description: "User email",
        },
      ],
      description: "Send password recovery email",
    },
    {
      name: "PasswordRecoverList",
      method: "put",
      params: [
        {
          name: "password_secret",
          type: "string",
          required: true,
          description: "Password recovery secret",
        },
        {
          name: "password",
          type: "string",
          required: true,
          description: "New password",
        },
      ],
      description: "Update user password",
    },
    {
      name: "verify_user",
      method: "get",
      params: [
        {
          name: "verification_secret",
          type: "string",
          required: true,
          description: "User verification secret",
        },
      ],
      description: "Verify user email",
    },
    {
      name: "OrderViewSet",
      method: "post",
      params: [
        {
          name: "client",
          type: "CustomUser",
          required: true,
          description: "Client user",
        },
        {
          name: "status",
          type: "string",
          required: true,
          description: "Order status",
        },
        {
          name: "pay_status",
          type: "string",
          required: true,
          description: "Payment status",
        },
      ],
      description: "Create a new order",
    },
    {
      name: "ShopViewSet",
      method: "get",
      params: [
        {
          name: "name",
          type: "string",
          required: true,
          description: "Shop name",
        },
      ],
      description: "Retrieve shop details",
    },
    {
      name: "BuyingAccountsViewsSet",
      method: "post",
      params: [
        {
          name: "account_name",
          type: "string",
          required: true,
          description: "Account name",
        },
      ],
      description: "Create a new buying account",
    },
    {
      name: "CommonInformationViewSet",
      method: "get",
      params: [],
      description: "Retrieve common information",
    },
    {
      name: "ProductViewSet",
      method: "post",
      params: [
        {
          name: "sku",
          type: "string",
          required: true,
          description: "Product SKU",
        },
        {
          name: "name",
          type: "string",
          required: true,
          description: "Product name",
        },
        {
          name: "shop",
          type: "Shop",
          required: true,
          description: "Shop details",
        },
        {
          name: "amount_requested",
          type: "number",
          required: true,
          description: "Amount requested",
        },
      ],
      description: "Create a new product",
    },
    {
      name: "ShoppingReceipViewSet",
      method: "post",
      params: [
        {
          name: "shopping_account",
          type: "BuyingAccounts",
          required: true,
          description: "Shopping account",
        },
        {
          name: "shop_of_buy",
          type: "Shop",
          required: true,
          description: "Shop details",
        },
        {
          name: "status_of_shopping",
          type: "string",
          required: true,
          description: "Shopping status",
        },
      ],
      description: "Create a new shopping receipt",
    },
    {
      name: "ProductBuyedViewSet",
      method: "post",
      params: [
        {
          name: "original_product",
          type: "Product",
          required: true,
          description: "Original product",
        },
        {
          name: "order",
          type: "Order",
          required: true,
          description: "Order details",
        },
        {
          name: "actual_cost_of_product",
          type: "number",
          required: true,
          description: "Actual cost of product",
        },
      ],
      description: "Create a new bought product",
    },
    {
      name: "ProductReceivedViewSet",
      method: "post",
      params: [
        {
          name: "original_product",
          type: "Product",
          required: true,
          description: "Original product",
        },
        {
          name: "order",
          type: "Order",
          required: true,
          description: "Order details",
        },
        {
          name: "amount_received",
          type: "number",
          required: true,
          description: "Amount received",
        },
      ],
      description: "Create a new received product",
    },
    {
      name: "PackageViewSet",
      method: "post",
      params: [
        {
          name: "agency_name",
          type: "string",
          required: true,
          description: "Agency name",
        },
        {
          name: "number_of_tracking",
          type: "string",
          required: true,
          description: "Tracking number",
        },
        {
          name: "status_of_processing",
          type: "string",
          required: true,
          description: "Processing status",
        },
      ],
      description: "Create a new package",
    },
    {
      name: "DeliverReceipViewSet",
      method: "post",
      params: [
        {
          name: "order",
          type: "Order",
          required: true,
          description: "Order details",
        },
        {
          name: "weight",
          type: "number",
          required: true,
          description: "Weight of the delivery",
        },
        {
          name: "status",
          type: "string",
          required: true,
          description: "Delivery status",
        },
      ],
      description: "Create a new delivery receipt",
    },
  ],
];
