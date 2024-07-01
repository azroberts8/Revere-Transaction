import { Signal } from "@preact/signals";
import { Header } from "../components/Header.tsx";
import TextInput from "./TextInput.tsx";
import DropDownSelector from "./DropDownSelector.tsx";
import { Button } from "../components/Button.tsx";

interface AddressFormParams {
    address: Signal<string>;
    unit: Signal<string>;
    city: Signal<string>;
    state: Signal<string>;
    zipcode: Signal<string>;
    country: Signal<string>;
    back: () => void;
    submit: () => void;
}

export default function DonorAddressform({
    address,
    unit,
    city,
    state,
    zipcode,
    country,
    back,
    submit
}: AddressFormParams) {
    return(
        <div class="h-full flex flex-col bg-white">
            <Header backFn={back}>Enter your address</Header>
            <div class="h-full p-7">
                <div>
                    <TextInput name="addressInput" label="Street Address" value={address} />
                    <TextInput name="unitInput" label="Apartment / Unit" value={unit} />
                    <TextInput name="cityInput" label="City" value={city} />    
                </div>
                <div class="pt-3">
                    { country == "US"
                    ? (
                    <DropDownSelector name="stateSelector" label="State" value={state}>
                        <optgroup label="States">
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </optgroup>
                        <optgroup label="US Territories">
                            <option value="AS">American Samoa</option>
                            <option value="GU">Guam</option>
                            <option value="MP">Northern Mariana Islands</option>
                            <option value="PR">Puerto Rico</option>
                            <option value="UM">United States Minor Outlying Islands</option>
                            <option value="VI">Virgin Islands</option>
                        </optgroup>
                    </DropDownSelector>)
                    : (<TextInput name="stateInput" label="State" value={state} />) }
                    <TextInput name="zipcodeInput" label="Zip Code" value={zipcode} />
                    <DropDownSelector name="countrySelector" label="Country" value={country}>
                        <option value="US">United States</option>
                    </DropDownSelector>
                </div>
            </div>
            <div class="p-7">
                <Button onClick={submit}>Continue</Button>
            </div>
        </div>
    );
}