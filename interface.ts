interface objInterface {
    id: number;
    name: string;
};

interface instInterface extends objInterface{
    instId: number;
    inst: string;
};

let obj: instInterface = {
    id: 5,
    name: "Rashid",
    instId: 45,
    inst: "SMIT",
};