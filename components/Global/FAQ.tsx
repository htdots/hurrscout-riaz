"use client";

import Link from "next/link";
import { React, useState } from "react";
import { CiCircleQuestion } from "react-icons/ci";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";


export default function FAQ({ rounded }) {

    const [faqToggler, setFaqToggler] = useState(false)
    const [faq, setFaq] = useState(         //Faq Array Of Object
        [
            {
                id: 0,
                question: 'Kunnen jullie me helpen met het vinden van een woning?',
                answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae corporis quasi, quia molestias possimus vel magnam fugit excepturi reiciendis animi accusantium, eius inventore distinctio! Repellendus nostrum id adipisci veritatis perferendis?',
                isOpen: false,
            },

            {
                id: 1,
                question: 'Vehuren jullie ook woningen?',
                answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae corporis quasi, quia molestias possimus vel magnam fugit excepturi reiciendis animi accusantium, eius inventore distinctio! Repellendus nostrum id adipisci veritatis perferendis?',
                isOpen: false,
            },

            {
                id: 2,
                question: 'Wat is jullie inkomenseis',
                answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae corporis quasi, quia molestias possimus vel magnam fugit excepturi reiciendis animi accusantium, eius inventore distinctio! Repellendus nostrum id adipisci veritatis perferendis?',
                isOpen: false,
            },

            {
                id: 3,
                question: 'Moet ik jullie ook comissie betalen?',
                answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae corporis quasi, quia molestias possimus vel magnam fugit excepturi reiciendis animi accusantium, eius inventore distinctio! Repellendus nostrum id adipisci veritatis perferendis?",
                isOpen: false,
            },

            {
                id: 4,
                question: 'Hoe werkt Huurscout?',
                answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae corporis quasi, quia molestias possimus vel magnam fugit excepturi reiciendis animi accusantium, eius inventore distinctio! Repellendus nostrum id adipisci veritatis perferendis?",
                isOpen: false,
            },

            {
                id: 5,
                question: 'Vehuren jullie ook woningen?',
                answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae corporis quasi, quia molestias possimus vel magnam fugit excepturi reiciendis animi accusantium, eius inventore distinctio! Repellendus nostrum id adipisci veritatis perferendis?",
                isOpen: false,
            },

            {
                id: 6,
                question: 'Wat is jullie inkomenseis',
                answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae corporis quasi, quia molestias possimus vel magnam fugit excepturi reiciendis animi accusantium, eius inventore distinctio! Repellendus nostrum id adipisci veritatis perferendis?",
                isOpen: false,
            },
            {
                id: 7,
                question: 'Hoe werkt Huurscout?',
                answer: "Bespaar zeeën van tijd terwijl jouw zoekbot dag en nacht ruim 1.400 woningsites afspeurt. Bespaar zeeën van tijd terwijl jouw zoekbot dag en nacht ruim 1.400 woningsites afspeurt.",
                isOpen: false,
            },
        ]);



    const toggleHandler = (id) => {

        setFaq(prevState =>
            prevState.map(item => ({
                ...item,
                isOpen: item.id === id ? !item.isOpen : false,
            }))
        );
    }

    return (
        <div className="bg-[#242c3c]">
            <div className={`${rounded ? '  relative bottom-24 md:static' : ''} w-full rounded-t-2xl flex flex-col gap-y-10 justify-center items-center py-8  md:pb-16 bg-[#b8b6e7]`}>
                <h5 className="text-[35px] py-5 px-6 sm:text-[40px] md:text-[45px] lg:text-[60px] font-[900]  sm:w-[80%] md:w-[40%]  text-center  uppercase">Veel gestelde vragen</h5>
                <div className="flex flex-col justify-center items-center px-5">
                    {faq.map((contain) => (
                        <div
                            key={contain.id}
                            onClick={() => toggleHandler(contain.id)}
                            className={`${contain.isOpen ? 'h-auto ' : 'h-[75px] sm:h-[66px] md:h-[77px]'
                                } ${contain.id > 0 ? 'border-t' : ''} transition-all px-10 duration-200 cursor-pointer flex flex-col  overflow-hidden w-full sm:w-[91%] md:w-[70%] lg:w-[57%] xl:w-[53%] md:py-2 pb-5 text-[17px] md:text-xl font-semibold bg-[#fbf4ea] rounded-2xl mb-4`}
                        >
                            <h1
                                className={`${contain.id === 0 ? 'mt-3.5 md:mt-0.5' : 'mt-6 md:mt-1.5'
                                    } flex items-center justify-between mb-3 `}
                            >
                                <span className="max-w-[90%]">{contain.question}</span>
                                <IoIosArrowDown
                                    size={20}
                                    className={`${contain.isOpen ? '-rotate-180' : ''}`}
                                />
                            </h1>
                            <p className="ml-3 text-sm md:text-base pt-4">{contain.answer}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}


