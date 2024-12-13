
export const Login = async (Email: string, Password: string, AdminLogin: boolean, setwait: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {

        setwait(true)
        if (!Email || !Password) {
            alert('Please Provide Email and Password')
        }
        if (AdminLogin) {
            const response = await fetch('http://localhost:3000/admin/login', {
                method: 'POST', headers: {
                    'Content-Type': 'application/json'
                }, body: JSON.stringify({ Email, Password })
            });
            const data = await response.json();
            if (data.message == 'Admin Logged In Successfully') {
                window.location.href = '/admin/4645488464141119'
            }
            console.log(data);


            setwait(false)
            return;
        }
        const response = await fetch('http://localhost:3000/users/login', {
            method: 'POST', headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({ Email, Password })
        });
        const data = await response.json();
        if (data.message == 'User Logged In Successfully') {
            
            window.location.href = `/users/${data.data._id}`;
            return data
        }
        else {
            console.log(data.message);

        }
        console.log(data, 'this is the data');

        setwait(false)

    } catch (error) {
        console.log(error);

    }
}