interface AuthLayoutProps {
  children: React.ReactNode
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, animi voluptatem. Quia, repudiandae eum
        aliquam cumque eaque nesciunt perferendis ad deleniti sit delectus soluta expedita odio non unde dignissimos a?
      </p>
      {children}
    </main>
  )
}

export default AuthLayout
