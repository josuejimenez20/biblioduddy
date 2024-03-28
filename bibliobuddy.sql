PGDMP     &                    |            bibliobuddy    15.3    15.3 .    A           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            B           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            C           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            D           1262    16681    bibliobuddy    DATABASE     �   CREATE DATABASE bibliobuddy WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE bibliobuddy;
                postgres    false            �            1259    16852    currently_reading_books    TABLE     �   CREATE TABLE public.currently_reading_books (
    fk_currently_list_book_id character varying(500),
    fk_book_id character varying(500)
);
 +   DROP TABLE public.currently_reading_books;
       public         heap    postgres    false            �            1259    16840    currently_reading_list_books    TABLE     �   CREATE TABLE public.currently_reading_list_books (
    currenlty_book_list_id character varying(500) NOT NULL,
    fk_user_id character varying(500)
);
 0   DROP TABLE public.currently_reading_list_books;
       public         heap    postgres    false            �            1259    16786    pending_books    TABLE     �   CREATE TABLE public.pending_books (
    fk_pending_book_list_id character varying(500),
    fk_book_id character varying(500)
);
 !   DROP TABLE public.pending_books;
       public         heap    postgres    false            �            1259    16745    pending_books_list    TABLE     �   CREATE TABLE public.pending_books_list (
    pending_book_list_id character varying(500) NOT NULL,
    fk_user_id character varying(500)
);
 &   DROP TABLE public.pending_books_list;
       public         heap    postgres    false            �            1259    16730    reading_history_books    TABLE     �   CREATE TABLE public.reading_history_books (
    fk_reading_history_book_list_id character varying(500),
    fk_book_id character varying(500)
);
 )   DROP TABLE public.reading_history_books;
       public         heap    postgres    false            �            1259    16718    reading_history_books_list    TABLE     �   CREATE TABLE public.reading_history_books_list (
    reading_book_list_id character varying(500) NOT NULL,
    fk_user_id character varying(500)
);
 .   DROP TABLE public.reading_history_books_list;
       public         heap    postgres    false            �            1259    16706 
   user_books    TABLE     G  CREATE TABLE public.user_books (
    book_id character varying(500) NOT NULL,
    fk_user_id character varying(500),
    name character varying(400),
    author character varying(400),
    gender character varying(200),
    publication_date date,
    editorial character varying(300),
    image_path character varying(1000)
);
    DROP TABLE public.user_books;
       public         heap    postgres    false            �            1259    16696    user_information    TABLE     �   CREATE TABLE public.user_information (
    fk_user_id character varying(500),
    name character varying(50),
    lastname character varying(50),
    second_lastname character varying(50)
);
 $   DROP TABLE public.user_information;
       public         heap    postgres    false            �            1259    16682    users    TABLE     �   CREATE TABLE public.users (
    user_id character varying(500) NOT NULL,
    email character varying(200),
    password character varying(200)
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16813 
   wish_books    TABLE     {   CREATE TABLE public.wish_books (
    fk_wish_list_book_id character varying(500),
    fk_book_id character varying(500)
);
    DROP TABLE public.wish_books;
       public         heap    postgres    false            �            1259    16801    wish_list_books    TABLE     �   CREATE TABLE public.wish_list_books (
    wish_book_list_id character varying(500) NOT NULL,
    fk_user_id character varying(500)
);
 #   DROP TABLE public.wish_list_books;
       public         heap    postgres    false            >          0    16852    currently_reading_books 
   TABLE DATA           X   COPY public.currently_reading_books (fk_currently_list_book_id, fk_book_id) FROM stdin;
    public          postgres    false    224   [;       =          0    16840    currently_reading_list_books 
   TABLE DATA           Z   COPY public.currently_reading_list_books (currenlty_book_list_id, fk_user_id) FROM stdin;
    public          postgres    false    223   �;       :          0    16786    pending_books 
   TABLE DATA           L   COPY public.pending_books (fk_pending_book_list_id, fk_book_id) FROM stdin;
    public          postgres    false    220   5<       9          0    16745    pending_books_list 
   TABLE DATA           N   COPY public.pending_books_list (pending_book_list_id, fk_user_id) FROM stdin;
    public          postgres    false    219   �<       8          0    16730    reading_history_books 
   TABLE DATA           \   COPY public.reading_history_books (fk_reading_history_book_list_id, fk_book_id) FROM stdin;
    public          postgres    false    218   =       7          0    16718    reading_history_books_list 
   TABLE DATA           V   COPY public.reading_history_books_list (reading_book_list_id, fk_user_id) FROM stdin;
    public          postgres    false    217   j=       6          0    16706 
   user_books 
   TABLE DATA           x   COPY public.user_books (book_id, fk_user_id, name, author, gender, publication_date, editorial, image_path) FROM stdin;
    public          postgres    false    216   �=       5          0    16696    user_information 
   TABLE DATA           W   COPY public.user_information (fk_user_id, name, lastname, second_lastname) FROM stdin;
    public          postgres    false    215   +?       4          0    16682    users 
   TABLE DATA           9   COPY public.users (user_id, email, password) FROM stdin;
    public          postgres    false    214   �?       <          0    16813 
   wish_books 
   TABLE DATA           F   COPY public.wish_books (fk_wish_list_book_id, fk_book_id) FROM stdin;
    public          postgres    false    222   ;@       ;          0    16801    wish_list_books 
   TABLE DATA           H   COPY public.wish_list_books (wish_book_list_id, fk_user_id) FROM stdin;
    public          postgres    false    221   �@       �           2606    16846 >   currently_reading_list_books currently_reading_list_books_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.currently_reading_list_books
    ADD CONSTRAINT currently_reading_list_books_pkey PRIMARY KEY (currenlty_book_list_id);
 h   ALTER TABLE ONLY public.currently_reading_list_books DROP CONSTRAINT currently_reading_list_books_pkey;
       public            postgres    false    223            �           2606    16785 *   pending_books_list pending_books_list_pkey 
   CONSTRAINT     z   ALTER TABLE ONLY public.pending_books_list
    ADD CONSTRAINT pending_books_list_pkey PRIMARY KEY (pending_book_list_id);
 T   ALTER TABLE ONLY public.pending_books_list DROP CONSTRAINT pending_books_list_pkey;
       public            postgres    false    219            �           2606    16729 :   reading_history_books_list reading_history_books_list_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.reading_history_books_list
    ADD CONSTRAINT reading_history_books_list_pkey PRIMARY KEY (reading_book_list_id);
 d   ALTER TABLE ONLY public.reading_history_books_list DROP CONSTRAINT reading_history_books_list_pkey;
       public            postgres    false    217            �           2606    16712    user_books user_books_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.user_books
    ADD CONSTRAINT user_books_pkey PRIMARY KEY (book_id);
 D   ALTER TABLE ONLY public.user_books DROP CONSTRAINT user_books_pkey;
       public            postgres    false    216            �           2606    16688    users users_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    214            �           2606    16807 $   wish_list_books wish_list_books_pkey 
   CONSTRAINT     q   ALTER TABLE ONLY public.wish_list_books
    ADD CONSTRAINT wish_list_books_pkey PRIMARY KEY (wish_book_list_id);
 N   ALTER TABLE ONLY public.wish_list_books DROP CONSTRAINT wish_list_books_pkey;
       public            postgres    false    221            �           2606    16740     reading_history_books fk_book_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.reading_history_books
    ADD CONSTRAINT fk_book_id FOREIGN KEY (fk_book_id) REFERENCES public.user_books(book_id);
 J   ALTER TABLE ONLY public.reading_history_books DROP CONSTRAINT fk_book_id;
       public          postgres    false    218    216    3215            �           2606    16796    pending_books fk_book_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.pending_books
    ADD CONSTRAINT fk_book_id FOREIGN KEY (fk_book_id) REFERENCES public.user_books(book_id);
 B   ALTER TABLE ONLY public.pending_books DROP CONSTRAINT fk_book_id;
       public          postgres    false    3215    216    220            �           2606    16823    wish_books fk_book_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.wish_books
    ADD CONSTRAINT fk_book_id FOREIGN KEY (fk_book_id) REFERENCES public.user_books(book_id);
 ?   ALTER TABLE ONLY public.wish_books DROP CONSTRAINT fk_book_id;
       public          postgres    false    222    216    3215            �           2606    16862 "   currently_reading_books fk_book_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.currently_reading_books
    ADD CONSTRAINT fk_book_id FOREIGN KEY (fk_book_id) REFERENCES public.user_books(book_id);
 L   ALTER TABLE ONLY public.currently_reading_books DROP CONSTRAINT fk_book_id;
       public          postgres    false    216    224    3215            �           2606    16857 1   currently_reading_books fk_currenlty_list_book_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.currently_reading_books
    ADD CONSTRAINT fk_currenlty_list_book_id FOREIGN KEY (fk_currently_list_book_id) REFERENCES public.currently_reading_list_books(currenlty_book_list_id);
 [   ALTER TABLE ONLY public.currently_reading_books DROP CONSTRAINT fk_currenlty_list_book_id;
       public          postgres    false    224    3223    223            �           2606    16791 %   pending_books fk_pending_book_list_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.pending_books
    ADD CONSTRAINT fk_pending_book_list_id FOREIGN KEY (fk_pending_book_list_id) REFERENCES public.pending_books_list(pending_book_list_id);
 O   ALTER TABLE ONLY public.pending_books DROP CONSTRAINT fk_pending_book_list_id;
       public          postgres    false    220    3219    219            �           2606    16735 5   reading_history_books fk_reading_history_book_list_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.reading_history_books
    ADD CONSTRAINT fk_reading_history_book_list_id FOREIGN KEY (fk_reading_history_book_list_id) REFERENCES public.reading_history_books_list(reading_book_list_id);
 _   ALTER TABLE ONLY public.reading_history_books DROP CONSTRAINT fk_reading_history_book_list_id;
       public          postgres    false    217    3217    218            �           2606    16713    user_books fk_user_id    FK CONSTRAINT     |   ALTER TABLE ONLY public.user_books
    ADD CONSTRAINT fk_user_id FOREIGN KEY (fk_user_id) REFERENCES public.users(user_id);
 ?   ALTER TABLE ONLY public.user_books DROP CONSTRAINT fk_user_id;
       public          postgres    false    3213    216    214            �           2606    16723 %   reading_history_books_list fk_user_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.reading_history_books_list
    ADD CONSTRAINT fk_user_id FOREIGN KEY (fk_user_id) REFERENCES public.users(user_id);
 O   ALTER TABLE ONLY public.reading_history_books_list DROP CONSTRAINT fk_user_id;
       public          postgres    false    214    217    3213            �           2606    16750    pending_books_list fk_user_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.pending_books_list
    ADD CONSTRAINT fk_user_id FOREIGN KEY (fk_user_id) REFERENCES public.users(user_id);
 G   ALTER TABLE ONLY public.pending_books_list DROP CONSTRAINT fk_user_id;
       public          postgres    false    3213    214    219            �           2606    16808    wish_list_books fk_user_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.wish_list_books
    ADD CONSTRAINT fk_user_id FOREIGN KEY (fk_user_id) REFERENCES public.users(user_id);
 D   ALTER TABLE ONLY public.wish_list_books DROP CONSTRAINT fk_user_id;
       public          postgres    false    3213    214    221            �           2606    16847 '   currently_reading_list_books fk_user_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.currently_reading_list_books
    ADD CONSTRAINT fk_user_id FOREIGN KEY (fk_user_id) REFERENCES public.users(user_id);
 Q   ALTER TABLE ONLY public.currently_reading_list_books DROP CONSTRAINT fk_user_id;
       public          postgres    false    3213    223    214            �           2606    16701 $   user_information fk_user_information    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_information
    ADD CONSTRAINT fk_user_information FOREIGN KEY (fk_user_id) REFERENCES public.users(user_id);
 N   ALTER TABLE ONLY public.user_information DROP CONSTRAINT fk_user_information;
       public          postgres    false    214    3213    215            �           2606    16818    wish_books fk_wish_list_book_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.wish_books
    ADD CONSTRAINT fk_wish_list_book_id FOREIGN KEY (fk_wish_list_book_id) REFERENCES public.wish_list_books(wish_book_list_id);
 I   ALTER TABLE ONLY public.wish_books DROP CONSTRAINT fk_wish_list_book_id;
       public          postgres    false    222    221    3221            >   H   x����0 ���E�!��G��G�[/�t1���@�8I��O�܏�2��;��0��$�W��� ?%��      =   r   x�͹� �����@H�z�]����'��kq�g0���B�.U��O�g$��]���J�GJĲ�)6��U��]:��1t�Ū��Q�xxkE���pO�R8�^g��{[k��&�      :   J   x�ʱ� �:�Bя�.iP`�����	>�xx�6n�Us�ӛ]f	Yx2��ByX�
��g�{�'�      9   r   x�͹� �����@H�z�]����'��kq�g0���B�.U��O�g$��]���J�GJĲ�)6��U��]:��1t�Ū��Q�xxkE���pO�R8�^g��{[k��&�      8   I   x����0����؋!����v��%�koewW�w�!���,�} ���qK� 8�i51�eJ�ID&j8      7   r   x�͹� �����@H�z�]����'��kq�g0���B�.U��O�g$��]���J�GJĲ�)6��U��]:��1t�Ū��Q�xxkE���pO�R8�^g��{[k��&�      6   /  x���MKA�ϻ�b�@d>2��c�@)�AA�df����N׃��A,VO��@�C��o�3��2($t����(��p��fL=FL���cH�.g�Yms7��4�\�8�n��̟���6JY���Ɓw��Ҝ����e9�&f��X%01��m��IV�Gs<��m��pwEe螸{��֬��\�t mN�lK��{�RZ]���a�*����$���O�{<��a��O7�T{��Y��Hd���*�TO"�Z�VI���̘(�tJ�>L�!M���=R��~)C���#�'om�~֩�n      5   x   x��A
�0 ���~`�I�19*��/���ۀ�zg�zI�3z�}���QP����f������u����Һ�TKM�9�C?�`rŢ�Hē�\���c������#����� #S      4   x   x��I�  �3��(,�����b�iSA�E��;�5	�ʐ�gH�j-����1b�泮[���c8Y�4�:؇hӃz���Ҧ�	�n�KΦ�X0n�߬o��v�g�u.aa�t��?��'i      <   I   x�ʱ�0 �Zv�����?�~�s����PD�#�ս-r�s������Q�OQ�Hda;�T� >3��      ;   r   x�͹� �����@H�z�]����'��kq�g0���B�.U��O�g$��]���J�GJĲ�)6��U��]:��1t�Ū��Q�xxkE���pO�R8�^g��{[k��&�     