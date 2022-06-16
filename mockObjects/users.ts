import { User } from "@prisma/client";

export type BaseUser = Omit<User, 'id'>;

const users: BaseUser[] = [
    {
        email: 'rainh2001@gmail.com',
        firstName: 'Rain',
        lastName: 'Holloway'
    },
    {
        email: 'genevievepiper02@gmail.com',
        firstName: 'Genevieve',
        lastName: 'Swinton'
    },
    {
        email: 'alisonkyrie@hotmail.com',
        firstName: 'Alison',
        lastName: 'Wells'
    }
]

export default users