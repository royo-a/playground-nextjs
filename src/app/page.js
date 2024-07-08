'use client';
import { useOptimistic } from 'react';
import { send } from '@/app/actions';

export default function Home() {
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    [],
    (state, newMessage) => [...state, { message: newMessage }]
  );

  return (
    <div>
      <div>
        {optimisticMessages.map((m) => {
          return <p key={m.message}>{m.message}</p>;
        })}
      </div>
      <form
        action={async (formData) => {
          const message = formData.get('message');
          addOptimisticMessage(message);
          await send(message);
        }}
        className="flex flex-col gap-2 items-start"
      >
        <input className="border" type="text" name="message" />
        <button className="border" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
