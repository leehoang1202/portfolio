import './hero.scss';

const HeroRight = () => {

    return (
        <div className='hero-right'>
            <div className='border-top'></div>
            <div className='first'>
                <div className='circle bg-first'></div>
                <div className='circle bg-second'></div>
                <div className='circle bg-third'></div>
            </div>
            <div className='second'>
                <code className="text-white-0">
                    <div>
                        <span className="me-2 text-pink-100">Sumary</span>
                        <span className="me-2">Experiences</span>
                        <span className="me-2 text-pink-100">=</span>
                        <span>{'{'}</span>
                    </div>
                    <div>
                        <span className="ms-4 me-2">name:</span>
                        <span className='text-yellow-500'>
                            {`'`}An Hoang Dien{`',`}
                        </span>
                    </div>
                    <div className="ms-4 me-2 text-pink-200">
                        <span className="text-white-0">skills:</span>
                        <span>{`['`}</span>
                        <span >Operate E-commerce Platform</span>
                        <span>{"', '"}</span>
                        <span >Solving Problem</span>
                        <span>{"', '"}</span>
                        <span >Management Team</span>
                        <span>{"', '"}</span>
                        <span >Planning</span>
                        <span>{"', '"}</span>
                        <span >SEO</span>
                        <span>{"', '"}</span>
                        <span >Dara Analysis Dashboard</span>
                        <span>{"'],"}</span>
                    </div>
                    <div>
                        <span className="ms-4  me-2 ">hardWorker:</span>
                        <span className="text-red-500">true</span>
                        <span>,</span>
                    </div>
                    <div>
                        <span className="ms-4  me-2 ">quickLearner:</span>
                        <span className="text-red-500">true</span>
                        <span>,</span>
                    </div>
                    <div>
                        <span className="ms-4 me-2 ">problemSolver:</span>
                        <span className="text-red-500">true</span>
                        <span>,</span>
                    </div>
                    <div>
                        <span className="ms-4 me-2 text-green-700">Achievement:</span>
                        <span className="text-red-500">function</span>
                        <span>{'() {'}</span>
                    </div>
                    <div>
                        <span className="ms-5 me-2 text-red-500">return</span>
                        <span>{`(`}</span>
                    </div>
                    <div>
                        <span className="ms-5 ps-3 text-blue-100">Revenue</span>
                        <span className="me-2 "> E-Com Store from 0</span>
                        <span className='text-blue-100'>to 800 million vnd</span>
                    </div>
                    <div>
                        <span className="ms-5 ps-3 text-blue-100">Buil</span>
                        <span className="me-2 "> problemSolver</span>
                        <span className='text-blue-100'>&amp;&amp;</span>
                    </div>
                    <div>
                        <span className="ms-5 ps-3 text-blue-100">this.</span>
                        <span className="me-2">skills.length</span>
                        <span className="me-2 text-blue-100">&gt;=</span>
                        <span className="text-red-500">5</span>
                    </div>
                    <div><span className="ms-5 me-2 ">{`);`}</span></div>
                    <div><span className="ms-4">{`};`}</span></div>
                    <div><span>{`};`}</span></div>
                </code>
            </div>
        </div>
    )
}

export default HeroRight;
