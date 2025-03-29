import type { Gadget } from '@/data/gadgets';
import { keyboards, machines } from '@/data/gadgets';

function MachineRow({ machine }: { machine: Gadget }) {
  return (
    <tr className="hover">
      <td>
        {machine.link ? (
          <a
            href={machine.link}
            target="_blank"
            className="text-gv-aqua1 underline"
            rel="noreferrer"
          >
            {machine.name}
          </a>
        ) : (
          <span>{machine.name}</span>
        )}
      </td>
      <td>
        {machine.spec.split('\n').map((l) => (
          <p key={l} className="whitespace-pre-wrap break-words text-sm">
            {l}
          </p>
        ))}
      </td>
      <td>
        {machine.since} - {machine.to}
      </td>
    </tr>
  );
}

function KeyboardRow({ keyboard }: { keyboard: Gadget }) {
  return (
    <tr className="hover">
      <td>
        <span>{keyboard.name}</span>
      </td>
      <td>
        {keyboard.link ? (
          <a
            className="text-gv-aqua1 underline"
            target="_blank"
            href={keyboard.link}
            rel="noreferrer"
          >
            {keyboard.spec}
          </a>
        ) : (
          <span>{keyboard.link}</span>
        )}
      </td>
      <td>
        {keyboard.since} - {keyboard.to}
      </td>
    </tr>
  );
}

export default function GadgetPage() {
  return (
    <div className="overflow-x-auto">
      <div className="my-4">
        <h2 className="text-2xl font-bold text-gv-aqua2">Machines</h2>
        <table className="table table-md mt-4 w-full">
          <thead>
            <tr>
              <th className="w-1/5">Nickname</th>
              <th className="w-3/5">Spec</th>
              <th className="w-1/5">Date</th>
            </tr>
          </thead>
          <tbody>
            {machines
              .sort((a, b) =>
                a.since > b.since ? -1 : a.since < b.since ? 1 : 0,
              )
              .map((machine) => (
                <MachineRow key={machine.name} machine={machine} />
              ))}
          </tbody>
        </table>
      </div>

      <div className="my-4">
        <h2 className="text-2xl font-bold text-gv-aqua2">Keyboards</h2>
        <table className="table table-md mt-4 w-full">
          <thead>
            <tr>
              <th className="w-1/5">Nickname</th>
              <th className="w-3/5">Spec</th>
              <th className="w-1/5">Date</th>
            </tr>
          </thead>
          <tbody>
            {keyboards
              .sort((a, b) =>
                a.since > b.since ? -1 : a.since < b.since ? 1 : 0,
              )
              .map((machine) => (
                <KeyboardRow key={machine.name} keyboard={machine} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
