const StoreLogo = ({ name }: { name: string }) => {
  const hanleSource = (name: string) => {
    switch (name.toLowerCase()) {
      case "adidas":
        return "/stores/adidas.svg";
      case "shein":
        return "/stores/shein.svg";
      case "temu":
        return "/stores/temu.svg";
      case "amazon":
        return "/stores/amazon.svg";
      case "ebay":
        return "/stores/ebay.svg";
      case "walmart":
        return "/stores/walmart.svg";
      case "aliexpress":
        return "/stores/aliexpress.svg";
    }
  };
  return (
    <div className="flex justify-star items-center p-1 min-h-[20px]">
      {name && (
        <img src={hanleSource(name)} className="aspect-square max-h-[25px]" width={50} alt={`Store logo ${name}`} />
      )}
    </div>
  );
};
export default StoreLogo;
