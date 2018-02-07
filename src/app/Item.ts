export class Item{
    constructor( 
        public  bathroom_number: string,
        public  bedroom_number: number,
        public  car_spaces: number,
        public  commission: number,
        public  construction_year:number,
        public  datasource_name: string,  
        public  img_height: number,  
        public  img_url: string,  
        public  img_width: number,  
        public  keywords: string,  
        public  latitude: number,  
        public  lister_url: string,  
        public  listing_type: string, 
        public  location_accuracy: number,  
        public  longitude: number,  
        public  price: number,  
        public  price_currency: string,  
        public  price_formatted: string,  
        public  price_high: number,  
        public  price_low: number,  
        public  property_type: string,  
        public  size: number,  
        public  size_type: string,  
        public  summary: string,  
        public  thumb_height: number,  
        public  thumb_url: string,  
        public  thumb_width:number,  
        public  title: string,  
        public  updated_in_days: number,  
        public  updated_in_days_formatted: string
    ){}
}
