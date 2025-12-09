interface User {
    id: string;
    name: string;
    email: string;
    avatar: string | null;
}

interface UserSlice {
    user: User | null;
    setUser: (user: User) => void;
    logout: () => void;
}
