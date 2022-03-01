import React from 'react';
import { Image, Flex, Heading, Text, useColorModeValue, Box, Stack, Spacer } from '@chakra-ui/react';
import useTrans from '../../hooks/useTrans';
import ProjectCard from '../common/ProjectCard';
import { motion } from 'framer-motion';

const MotionFlex = motion(Flex)
export default function Projects({ ...props }) {
    const trans = useTrans();
    const headingColor = useColorModeValue('light_heading_color', 'dark_heading_color');
    const stressTextColor = useColorModeValue('light_text_stress', 'dark_text_stress');
    const grayTextColor = useColorModeValue('light_text_blur', 'dark_text_blur');
    const frameColor = useColorModeValue('#003049', '#454545')


    return (
        <MotionFlex direction="column" w="100%" alignItems="center" justifyItems="center" {...props}>
            <Heading as="h1" color={headingColor} textTransform='uppercase' fontWeight="bold" my={5}>
                {trans.about.project_title}
            </Heading>
            <ProjectCard
                projectName={`${trans.about.personal_web} (In progress)`}
                description={trans.about.personal_web_description}
                technologies="ReactJS/NextJS, Laravel"
                imgUrl="/images/projects/blog1.png"
                frameColor={frameColor}
                subColor={grayTextColor}
                titleColor={stressTextColor}
            />
            <ProjectCard
                projectName="QR Scanner Museum"
                description="Ứng dụng hỗ trợ quét mã QR để tra cứu các thông tin về các hiện vật trong viện bảo tàng một cách nhanh chóng."
                technologies="Flutter, Laravel"
                imgUrl="/images/projects/qr.png"
                frameColor={frameColor}
                subColor={grayTextColor}
                titleColor={stressTextColor}
            />
            <ProjectCard
                projectName="Can Tho Healcare"
                description="Ứng dụng di động hỗ trợ người dùng và bác sĩ trong việc đặt, sắp xếp lịch hẹn giữa bệnh nhân và bác sĩ sao cho hiệu quả trong việc thăm khám chửa bệnh cũng như là rút ngắn được thời gian chờ đợi khám bệnh như thông thường."
                technologies="Flutter, Firebase"
                imgUrl="/images/projects/cthealth1.png"
                frameColor={frameColor}
                subColor={grayTextColor}
                titleColor={stressTextColor}
            />
            <ProjectCard
                projectName="Wowfood"
                description="Trang web nhỏ này giúp người dùng có thể xem, lựa chọn và đặt món ăn mà mình ưa thích một cách nhanh chóng và trực quan."
                technologies="NodeJS, ReactJS, MySQL"
                imgUrl="/images/projects/wowfood.png"
                frameColor={frameColor}
                subColor={grayTextColor}
                titleColor={stressTextColor}
            />
            <ProjectCard
                projectName="Bookworm"
                description="Với Bookworm, người dùng có thể xem, đánh giá và đặt mua sách trực tuyến một cách nhanh chóng và tiện lợi."
                technologies="Laravel, ReactJS, PostgreSQL"
                imgUrl="/images/projects/bookworm.png"
                frameColor={frameColor}
                subColor={grayTextColor}
                titleColor={stressTextColor}
            />
            <ProjectCard
                projectName="Quick Formula"
                description="Trang web giúp học sinh có thể tra cứu các công thức toán, lý, hóa, sinh,... một cách nhanh chóng, làm tăng tốc độ làm bài tập và có các mẹo để ghi nhớ công thức, giúp cho việc ghi nhớ công thức trở nên dễ dàng và hiệu quả hơn."
                technologies="PHP, Javascript, MySQL"
                imgUrl="/images/projects/qf1.png"
                frameColor={frameColor}
                subColor={grayTextColor}
                titleColor={stressTextColor}
            />
        </MotionFlex>
    )
}
