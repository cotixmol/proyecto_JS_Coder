// 5) Funcion de construcción que uso para crear los objetos de inversion, cada uno tiene un nombre, valor y cantidad asociado.
// Luego cada objeto ira a un array.

function Wallet_assets(asset_input_name,asset_input_amount,asset_input_value){
    this.asset_input_name=asset_input_name;
    this.asset_input_amount=asset_input_amount;
    this.asset_input_value=asset_input_value;
}