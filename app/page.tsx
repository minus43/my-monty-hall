import './globals.css';

export default function Page() {
  return (
    <div className='min-h-screen px-6 py-12 bg-gray-100 text-gray-800'>
      <div className='text-center mb-12'>
        <h1 className='text-5xl md:text-6xl font-extrabold text-blue-600'>
          이것은 몬티 홀 딜레마입니다.
        </h1>
      </div>

      <div className='max-w-3xl mx-auto space-y-6 text-lg leading-relaxed'>
        <p>
          Suppose you’re on a game show, and you’re given the choice of three
          doors. Behind one door is a car, behind the others, goats. You pick a
          door, say #1, and the host, who knows what’s behind the doors, opens
          another door, say #3, which has a goat. He says to you, "Do you want
          to pick door #2?" Is it to your advantage to switch your choice of
          doors?
        </p>
        <p>
          당신이 한 게임 쇼에서 3개의 문 중에 하나를 고를 수 있는 상황이라고
          가정하자. 한 문 뒤에는 자동차가, 다른 두 문 뒤에는 염소가 있다. 당신이
          1번 문을 고르자, 문 뒤에 무엇이 있는지 아는 사회자는 3번 문을 열어서
          염소를 보여줬다. 그리고는 "2번 문으로 바꾸시겠습니까?"라고 물었다. 이
          상황에서, 당신의 선택을 바꾸는 게 유리할까?
        </p>
      </div>

      <div className='mt-12 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-center'>
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h2 className='text-xl font-semibold text-green-600 mb-2'>
            바꾸는 게 유리할 확률
          </h2>
          <p className='text-2xl font-bold'>66.7%</p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h2 className='text-xl font-semibold text-red-600 mb-2'>
            바꾸지 않는 게 유리할 확률
          </h2>
          <p className='text-2xl font-bold'>33.3%</p>
        </div>
      </div>

      <div className='mt-12 text-center'>
        <button className='px-6 py-3 text-white text-lg font-semibold bg-blue-600 rounded hover:bg-blue-700 transition'>
          당신의 선택은?
        </button>
      </div>
    </div>
  );
}
