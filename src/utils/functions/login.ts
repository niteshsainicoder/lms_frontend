
export const Login = async (Email: string, Password: string, AdminLogin: boolean, setwait: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
console.log(process.env.NEXT_PUBLIC_SERVER_URL);

        setwait(true)
        if (!Email || !Password) {
            alert('Please Provide Email and Password')
        }
        if (AdminLogin) {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/admin/login`, {
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
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/login`, {
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
            console.log(data);

        }
        console.log(data, 'this is the data');

        setwait(false)

    } catch (error) {
        console.log(error);

    }
}