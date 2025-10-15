import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import CardReview from "./CardReview";

export default function Reviews() {

    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={1}
                loop={true}
                pagination={{ clickable: true, }}
                autoplay={{ delay: 5000, disableOnInteraction: false, }}

                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className='mySwiper'
            >

                <SwiperSlide>
                    <CardReview />
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card">
                        <p>“Adoramos o atendimento, escolhi o pet perfeito para mim com a ajuda dessa equipe”</p>
                        <div className='card-1-info'>
                            <div>
                                <img src="https://i.pinimg.com/736x/f6/21/08/f621082bc6b6da5624788118b0e1d67c.jpg" alt="" />
                            </div>
                            <div>
                                <span>Kevin G.</span>
                                <p>⭐⭐⭐⭐</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card">
                        <p>“Adoramos o atendimento, escolhi o pet perfeito para mim com a ajuda dessa equipe”</p>
                        <div className='card-1-info'>
                            <div>
                                <img src="https://i.pinimg.com/736x/1e/0c/d0/1e0cd0e78eb90077c3769b3afe44da9b.jpg" alt="" />
                            </div>
                            <div>
                                <span>Nolan M.</span>
                                <p>⭐⭐⭐⭐⭐</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card">
                        <p>“Adoramos o atendimento, escolhi o pet perfeito para mim com a ajuda dessa equipe”</p>
                        <div className='card-1-info'>
                            <div>
                                <img src="https://i.pinimg.com/736x/1e/0c/d0/1e0cd0e78eb90077c3769b3afe44da9b.jpg" alt="" />
                            </div>
                            <div>
                                <span>Doris T.</span>
                                <p>⭐⭐⭐⭐⭐</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="card">
                        <p>“Adoramos o atendimento, escolhi o pet perfeito para mim com a ajuda dessa equipe”</p>
                        <div className='card-1-info'>
                            <div>
                                <img src="https://i.pinimg.com/1200x/3e/9d/5a/3e9d5a23522f953ba7a7b6388bf1c29f.jpg" alt="" />
                            </div>
                            <div>
                                <span>Marlin P.</span>
                                <p>⭐⭐⭐⭐⭐</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="card">
                        <p>“Adoramos o atendimento, escolhi o pet perfeito para mim com a ajuda dessa equipe”</p>
                        <div className='card-1-info'>
                            <div>
                                <img src="https://i.pinimg.com/1200x/ce/57/8f/ce578f683fe59d280016788c6b96a89e.jpg" alt="" />
                            </div>
                            <div>
                                <span>Karen T.</span>
                                <p>⭐⭐⭐⭐⭐</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    )

}