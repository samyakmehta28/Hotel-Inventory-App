export interface RoomsInfo {
    availableRooms?: number;
    bookedRooms?: number;
    totalRooms?: number;
}

export interface Room {
    roomNumber: string;
    roomType: string;
    amenities: string;
    photos: string;
    price: number;
    checkinTime: Date;
    checkoutTime: Date;
    rating: number;
}