import * as React from "react";
import '../../pages/main/main.css';

export const Header = () => {
    return (

     
        <div className="flex flex-col px-5 w-full max-md:max-w-full">
        <div className="flex gap-5 items-start text-sm font-bold text-white max-md:flex-wrap">
            <div className="flex flex-col">
            <div className="img-container">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e273b21e7a814573f6043f3bb8a5765e678dbd03a7dcdd8675469b73c1b547a1?"
                className="self-center border border-solid border-stone-500 stroke-[1px] stroke-stone-500 w-[218px]"
                style={{height: "0px"}}
            />
            <div className="mt-1 text-custom text-left">Symbol Logic</div>
            </div>
            </div>
            <div className="flex flex-col whitespace-nowrap">
            <div className="img-container">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c39689acba82139b57946ceeac68a4e60177d5b1f6190eb7594a0f5a99471a0?"
                className="self-center border border-solid border-stone-500 stroke-[1px] stroke-stone-500 w-[217px]"
                style={{height: "0px"}}
            />
            <div className="mt-1 text-custom text-left">ABOUT</div>
            </div>
            </div>
            <div className="flex flex-col">
            <div className="img-container">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e273b21e7a814573f6043f3bb8a5765e678dbd03a7dcdd8675469b73c1b547a1?"
                className="self-center border border-solid border-stone-500 stroke-[1px] stroke-stone-500 w-[218px]"
                style={{height: "0px"}}
            />
            <div className="mt-1 text-custom text-left">Business Model</div>
            </div>
            </div>
            <div className="flex flex-col whitespace-nowrap">
            <div className="img-container">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e273b21e7a814573f6043f3bb8a5765e678dbd03a7dcdd8675469b73c1b547a1?"
                className="self-center border border-solid border-stone-500 stroke-[1px] stroke-stone-500 w-[218px]"
                style={{height: "0px"}}
            />
            <div className="mt-1 text-custom text-left">CONTACT</div>
            </div>
            </div>
            <div className="flex flex-col whitespace-nowrap max-md:max-w-full">
            <div className="img-container">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb85f72d64de93b50a22883e92d0bd681d50f84e866a50349337a0eff12d5a74?"
                className="w-full border border-solid border-stone-500 stroke-[1px] stroke-stone-500 max-md:max-w-full"
                style={{height: "0px"}}
            />
            <div className="mt-1 text-custom max-md:max-w-full text-left">SHOP</div>
            </div>
            </div>
            <div className="flex flex-col self-stretch text-lg">
            <div className="img-container">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7aa30990a4364aea264e71e50ad7f68ba74024395d1b99a9a0c940b6cb3c347f?"
                className="w-full border border-solid border-stone-500 stroke-[1px] stroke-stone-500"
                style={{height: "0px"}}
            />
            <div className="mt-1.5 text-left">MADE GRAPHIC &gt;</div>
            </div>
            </div>
        </div>
        <div className="flex self-start mt-12 w-full max-w-[1796px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            {/*(<div className="flex-auto text-9xl italic font-black text-white leading-[77px] max-md:text-4xl max-md:leading-7">*/}
                <img src="/assets/images/newSymbol.svg" alt="Symbol" className="symbol-img" />
            {/*</div>*/}
            <div className="flex-auto self-start mt-0 max-md:max-w-full">
            <div className="flex max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[35%] max-md:ml-0 max-md:w-full">
                <div className="firstExplanation">
                <div className="text-custom ml-5 text-left font-medium leading-custom text-neutral-400 max-md:mt-6">
                    ‘The Symbol’ 은 자신의 아이덴티티를 활용하여 ai 어시스턴트의{" "}
                    인터페이스를 커스텀을 도와주는 디자인 스튜디오 입니다. {"     "}도형 ‘원'
                    을 기반으로 그래픽이 생성 되며 추가로 개인의 맞춤 성향을 위한
                    ai가  커스텀을 도와줍니다. 우리의 ‘The Symbol ’을 통해 자신만의 ‘ai{" "}
                    
                    어시스턴트’를 제작해보세요 !
                </div>
                </div>
                </div>
                <div className="flex flex-col ml-5 w-[50%] max-md:ml-0 max-md:w-full">
                <div className="text-custom text-left font-medium leading-custom text-neutral-400 max-md:mt-6 max-md:max-w-full">
                    &quot;'The Symbol'은 생년월일, 개인명에 근거하여 생성되는
                    상징물로서, 하이포 사이클로이드의 
                    기하학적 특성에서 착안했다. 하이포 사이클로이드는 큰 원의 내부를
                    맴도는 작은 원의 경계에 
                    위치한 점의 궤적으로 정의된다. 이 궤적은 개별적 존재가 사회에서
                    자신만의 신념, 가치관, 이데올로기를 바탕으로 경로를 그려 나가는
                    과정과 상통합니다. 다양한 이념과 삶의 정의를 지닌 우리는 
                    서로 연계되어 있음에도 불구하고 조화를 이루며 사회를 형성합니다.{" "}
                </div>
                </div>
            </div>
            </div>
            <div className="flex flex-col text-left text-custom text-neutral-400 my-auto font-medium leading-4 mr-3 mb-8">
            <div className="flex">
                <div className="flex flex-col mr-4">
                <div className="text-nowrap">_hhesta ©</div>
                <div className="text-nowrap">1999-2024</div>
                </div>
                <div className="text-3xl text-custom font-thin leading-9 text-gray-200 mr-4">/</div>
                <div className="flex flex-col">
                <div className="text-nowrap">_hhesta ©</div>
                <div className="text-nowrap">1999-2024</div>
                </div>
            </div>
            <div className="mt-6 text-white">
                INCHEON Metropolitan City, <br />
                South KOREA
            </div>
            </div>
        </div>
        </div>
        
    )
    }