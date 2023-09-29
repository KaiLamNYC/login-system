import Image from "next/image";
import React from "react";

export default function LoginPage() {
	return (
		<div className='bg-[#fcfcff] flex flex-row justify-center w-full'>
			<div className='bg-bgwhite overflow-hidden w-[1728px] h-[1102px]'>
				<div className='relative h-[1103px]'>
					<div className='absolute w-[1728px] h-[1103px] top-0 left-0'>
						{/* <Image
							className='w-[872px] h-[530px] top-0 left-0 absolute object-cover'
							alt='Image'
							src='image-7.png'
						/>
						<Image
							className='w-[856px] h-[530px] top-0 left-[872px] absolute object-cover'
							alt='Image'
							src='image-8.png'
						/>
						<Image
							className='w-[864px] h-[529px] top-[573px] left-0 absolute object-cover'
							alt='Image'
							src='image-9.png'
						/>
						<Image
							className='w-[864px] h-[529px] top-[573px] left-[864px] absolute object-cover'
							alt='Image'
							src='image-10.png'
						/> */}
					</div>
					<div className='absolute w-[1728px] h-[1102px] top-0 left-0 bg-[#c2dafbe6]' />
					<div className='absolute w-[1114px] h-[800px] top-[151px] left-[307px] bg-white rounded-[0px_35px_35px_35px]' />
					{/* <Image
						className='absolute w-[160px] h-[47px] top-[183px] left-[512px] object-cover'
						alt='Logo'
						src='logo-4.png'
					/>
					<Image
						className='w-px h-[603px] top-[252px] left-[882px] absolute object-cover'
						alt='Line'
						src='line-47.svg'
					/> */}
					<div className="absolute w-[99px] top-[256px] left-[542px] [font-family:'Nunito-Bold',Helvetica] font-bold text-black text-[32px] text-center tracking-[0] leading-[48px] whitespace-nowrap">
						Hello!
					</div>
					<div className="absolute w-[152px] top-[309px] left-[516px] [font-family:'Nunito-Bold',Helvetica] font-bold text-[#00002280] text-[14px] text-center tracking-[0] leading-[21px] whitespace-nowrap">
						Create Your Account
					</div>
					<div className='absolute w-[450px] h-[45px] top-[360px] left-[367px] bg-white rounded-[5px] border border-solid border-[#c0c0c0]' />
					{/* <Image
						className='w-[150px] h-px top-[324px] left-[368px] absolute object-cover'
						alt='Line'
						src='line-48.svg'
					/>
					<Image
						className='w-[150px] h-px top-[324px] left-[668px] absolute object-cover'
						alt='Line'
						src='line-49.svg'
					/> */}
					<div className="absolute w-[74px] top-[372px] left-[400px] [font-family:'Nunito-SemiBold',Helvetica] font-semibold text-[#00002280] text-[14px] tracking-[0] leading-[21px] whitespace-nowrap">
						First Name
					</div>
					<div className='absolute w-[205px] h-[45px] top-[815px] left-[368px] bg-white rounded-[5px] border border-solid border-[#c0c0c0]' />
					<div className="left-[384px] absolute w-[142px] top-[827px] [font-family:'Nunito-SemiBold',Helvetica] font-semibold text-[#00002280] text-[14px] tracking-[0] leading-[21px] whitespace-nowrap">
						Sign Up With Google
					</div>
					<div className='absolute w-[450px] h-[45px] top-[429px] left-[367px] bg-white rounded-[5px] border border-solid border-[#c0c0c0]' />
					<div className="absolute w-[74px] top-[441px] left-[399px] [font-family:'Nunito-SemiBold',Helvetica] font-semibold text-[#00002280] text-[14px] tracking-[0] leading-[21px] whitespace-nowrap">
						Last Name
					</div>
					<div className='absolute w-[450px] h-[46px] top-[497px] left-[367px] bg-white rounded-[5px] border border-solid border-[#c0c0c0]' />
					{/* <Image
						className='absolute w-[538px] h-[144px] top-[807px] left-[883px]'
						alt='Vector'
						src='vector.svg'
					/> */}
					<div className="absolute w-[74px] top-[510px] left-[400px] [font-family:'Nunito-SemiBold',Helvetica] font-semibold text-[#00002280] text-[14px] tracking-[0] leading-[21px] whitespace-nowrap">
						Email-id
					</div>
					<div className='absolute w-[450px] h-[45px] top-[566px] left-[367px] bg-white rounded-[5px] border border-solid border-[#c0c0c0]' />
					<div className="absolute w-[74px] top-[578px] left-[399px] [font-family:'Nunito-SemiBold',Helvetica] font-semibold text-[#00002280] text-[14px] tracking-[0] leading-[21px] whitespace-nowrap">
						Password
					</div>
					<div className='absolute w-[450px] h-[45px] top-[635px] left-[367px] bg-white rounded-[5px] border border-solid border-[#c0c0c0]' />
					<div className="absolute w-[117px] top-[647px] left-[399px] [font-family:'Nunito-SemiBold',Helvetica] font-semibold text-[#00002280] text-[14px] tracking-[0] leading-[21px] whitespace-nowrap">
						Confirm Password
					</div>
					<div className='absolute w-[450px] h-[45px] top-[703px] left-[368px] bg-[#1f64ff] rounded-[5px] border border-solid border-[#c0c0c0]' />
					<div className="absolute w-[117px] top-[715px] left-[537px] [font-family:'Nunito-Bold',Helvetica] font-bold text-white text-[16px] text-center tracking-[0] leading-[24px] whitespace-nowrap">
						Sign Up
					</div>
					<p className="absolute w-[224px] top-[887px] left-[480px] [font-family:'Nunito-Regular',Helvetica] font-normal text-transparent text-[14px] tracking-[0] leading-[21px] whitespace-nowrap">
						<span className='text-[#00002280]'>Already have an Account ? </span>
						<span className="[font-family:'Nunito-Medium',Helvetica] font-medium text-[#1f64ff]">
							LOGIN{" "}
						</span>
					</p>
					<div className="absolute w-[29px] top-[771px] left-[577px] [font-family:'Nunito-ExtraBold',Helvetica] font-extrabold text-[#00002280] text-[14px] text-center tracking-[0] leading-[21px] whitespace-nowrap">
						Or
					</div>
					{/* <Image
						className='w-[32px] h-[30px] top-[823px] left-[529px] absolute object-cover'
						alt='Image'
						src='image-1.png'
					/> */}
					<div className='absolute w-[205px] h-[45px] top-[815px] left-[612px] bg-white rounded-[5px] border border-solid border-[#c0c0c0]' />
					<div className="left-[628px] absolute w-[142px] top-[827px] [font-family:'Nunito-SemiBold',Helvetica] font-semibold text-[#00002280] text-[14px] tracking-[0] leading-[21px] whitespace-nowrap">
						Sign Up With Github
					</div>
					{/* <Image
						className='w-[40px] h-[37px] top-[820px] left-[768px] absolute object-cover'
						alt='Image'
						src='image-2.png'
					/>
					<Image
						className='absolute w-[500px] h-[326px] top-[375px] left-[892px]'
						alt='Digital'
						src='bro.png'
					/> */}
				</div>
			</div>
		</div>
	);
}
