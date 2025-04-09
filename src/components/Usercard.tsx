interface UserCardProps {
  name: string; 
  email: string;
  phone: string;
}

const Usercard = ({name,email,phone}:UserCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-64 text-center hover:shadow-lg transition duration-300">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{name}</h1>
        <p className="text-gray-600 text-sm mb-1 font-medium">{email}</p>
        <p className="text-gray-600 text-sm font-medium">{phone}</p>   
    </div>
  )
}

export default Usercard
