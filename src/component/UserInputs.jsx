export default function UserInput({onChangeValues,userInputValues}){
    
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" value={userInputValues['initialInvestment']} onChange={(event) => onChangeValues('initialInvestment',event.target.value)} required/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" value={userInputValues['annualInvestment']} onChange={(event) => onChangeValues('annualInvestment',event.target.value)} required/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" value={userInputValues['expectedReturn']} onChange={(event) => onChangeValues('expectedReturn',event.target.value)} required/>
                </p>
                <p>
                    <label>Durration</label>
                    <input type="number" value={userInputValues['duration']} onChange={(event) => onChangeValues('duration',event.target.value)} required/>
                </p>
            </div>
        </section>
    );
}