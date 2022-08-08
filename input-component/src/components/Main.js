import Input from './Input'

const Main = () => {

    return (
        <div className='main'>

            <h1>Inputs</h1>

            <div className='main__row'>
                <Input />
            </div>

            <div className='main__row'>
                <Input error />
            </div>

            <div className='main__row'>
                <Input disabled />
            </div>

            <div className='main__row'>
                <Input helperText='Some intersting text' />
                <Input helperText='Some intersting text' error />
            </div>

            <div className='main__row'>
                <Input startIcon='call' />
                <Input endIcon='lock' />
            </div>

            <div className='main__row'>
                <Input value='Text' />
            </div>

            <div className='main__row'>
                <Input size='sm' />
                <Input size='md' />
            </div>

            <div className='main__row'>
                <Input fullWidth />
            </div>

            <div className='main__row'>
                <Input multiline row='4' />
                <Input multiline row='4' error />
                <Input multiline row='4' disabled/>
            </div>

        </div>
    )
}

export default Main;
