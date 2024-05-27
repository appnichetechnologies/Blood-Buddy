import React from "react";

const Volunteer = () => 
{
    const volunteers = [
        {
            'id': 1,
            'name': 'Garvit',
            'location': 'Delhi, India',
            'blood_group': 'O+'
        },
        {
            'id': 2,
            'name': 'Mehere kaur',
            'location': 'Ghaziabad, Uttar Pradesh',
            'blood_group': 'B+'
        },
        {
            'id': 3,
            'name': 'Kenny',
            'location': 'Kerela, India',
            'blood_group': 'AB+'
        },
        {
            'id': 4,
            'name': 'Sarah',
            'location': 'Tamil Nadu, India',
            'blood_group': 'A+'
        },
        {
            'id': 5,
            'name': 'Kenneth',
            'location': 'Ayodhya, Uttar Pradesh',
            'blood_group': 'O+'
        },
        {
            'id': 6,
            'name': 'Ritika',
            'location': 'Ramnagar, Uttarakhand',
            'blood_group': 'O+'
        },
        {
            'id': 7,
            'name': 'Krish Maurya',
            'location': 'Surat, Gujarat',
            'blood_group': 'O-'
        },
        {
            'id': 8,
            'name': 'Tushkar',
            'location': 'Bengaluru, Karnataka',
            'blood_group': 'AB+'
        },
        {
            'id': 9,
            'name': 'Nitin',
            'location': 'Lucknow, India',
            'blood_group': 'AB-'
        },
        {
            'id': 10,
            'name': 'Riya',
            'location': 'Delhi, India',
            'blood_group': 'B+'
        },
    ]
    return (
        <>
            {/* Drop ===> 🩸 */}
            <div className='relative bg-red-400 w-[100%] h-auto pb-16'>
                <div className="pt-16 md:flex hidden justify-center">
                    <table className="w-[60%] text-lg text-left rtl:text-right text-white bg-red-500">
                        <tbody>
                            {
                                volunteers.map((items)=>(
                                    <tr key={items.id} className="border-4 bg-red-500 duration-500 border-red-700 hover:scale-110">
                                        <th scope="row" className="px-6 py-4 font-bold text-white whitespace-nowrap">
                                            {items.id}
                                        </th>
                                        <td className="px-6 py-4">
                                            {items.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {items.location}
                                        </td>
                                        <td className="px-6 py-4">
                                            {items.blood_group}
                                        </td>
                                    </tr>
                                ))
                            }
                                
                            
                        </tbody>
                    </table>
                </div>

				<div key='table' className="flex md:hidden justify-center">
					<div key='innertable' className="w-[90dvw] flex flex-col items-center">
						{
							volunteers.map((item) =>
							(
								<div key={item.id} className="w-full rounded-2xl mt-10  border-4 bg-red-500 duration-500 border-red-700 hover:scale-110 flex flex-col text-center px-6 py-4">
									<div className="text-white flex flex-col gap-4 text-sm">
										<div>
                                            {item.name}
										</div>
										<div>
                                            {item.location}
										</div>
                                        <div>
                                            {item.blood_group}
										</div>	
										
									</div>
								</div>
							))
						}
					</div>
				</div>
            </div>
        </>
    );
}

export default Volunteer;