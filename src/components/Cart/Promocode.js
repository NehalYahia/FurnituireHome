const Promocode=props=>
{
    return(
        <div className="rounded-pill border d-flex justify-content-between px-3 py-1 align-items-center mb-3  ">
              <input type="text" className="PromocodeInputField" placeholder="Promocode"/>
            <i class="fas fa-share-alt"></i>
        </div>
    )

}
export default Promocode;